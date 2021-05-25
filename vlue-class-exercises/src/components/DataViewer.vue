<template>
    <section class="my-5 content box">
        <h3 class="my-0">
            Local data viewer
            <button 
                class="button is-small is-primary is-pulled-right"
                @click="onClick">
                {{actionLabel}}
            </button>
        </h3>
        
        You can find the code for this app in <code>{{ location }}</code>

        <div class="mt-3" v-show="isVisible">
            <hr>
            <p>
                You can access the initial state (data) as follows:
            </p>
            <pre><code>window.__INITIAL_STATE__</code></pre>
            <p>
                Available data:
            </p>
            <pre><code>{{ initialState }}</code></pre>
        </div>
    </section>
</template>

<script lang="ts">
    import { InitialState } from '@typings/InitialState';
    import Vue, { PropOptions } from 'vue';

    export default Vue.extend({
        props: {
            showNavigation: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>,
        },

        data() {
            return {
                isVisible: false
            }
        },

        computed: {
            actionLabel(): string {
                if (this.isVisible) {
                    return 'Hide';
                }

                return 'Show';
            },

            initialState(): string {
                const initialState: InitialState = window.__INITIAL_STATE__;
                const initialStateCopy: any = { ...initialState };

                if (!this.showNavigation) {
                    initialStateCopy.navigation = '...';
                }

                return JSON.stringify(initialStateCopy, null, 4);
            },

            location(): string {
                return `/src/client${window.__INITIAL_STATE__.navigation.current.url}`
            },
        },

        methods: {
            onClick(): void {
                this.isVisible = !this.isVisible;
            }
        }
    })
</script>
