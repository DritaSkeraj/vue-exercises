<template>
    <div class="tab" v-show="isVisible">
        <slot>Content here</slot>
    </div>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import Component, { mixins } from 'vue-class-component';
    import Tabs from '@components/Tabs.vue';

    const TabProps = Vue.extend({
        props: {
            label: {
                type: String,
                required: true,
            } as PropOptions<string>,

            isActive: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>,
        }
    })

    @Component({
        name: 'Tab',
    })
    export default class extends mixins(TabProps) {
        isVisible: boolean = this.isActive;

        protected created(): void {
            this.register();
        }

        protected register(): void {
            const isTabsChild = this.$parent instanceof Tabs;

            if (!isTabsChild) {
                return;
            }

            const parent = this.$parent as Tabs;
            parent.registerChild(this);
        }
    }
</script>
