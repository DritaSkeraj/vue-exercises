<template>
    <svg class="logo" viewBox="0 0 122.88 106.42" :style="style">                   
        <g>
            <polygon class="logo__inner-stripe" points="75.63,0 61.44,24.58 47.25,0 0,0 61.44,106.42 122.88,0 75.63,0"/>
            <polygon class="logo__outer-stripe" points="75.63,0 61.44,24.58 47.25,0 24.58,0 61.44,63.85 98.3,0 75.63,0"/>
        </g>
    </svg>
</template>

<style lang="scss">
    .logo {
        width: 30px;
        height: 30px;

        &__inner-stripe {
            fill: #4DBA87;
        }

        &__outer-stripe {
            fill: #425466;
        }
    }
</style>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';

    export default Vue.extend({
        props: {
            size: {
                type: String,
                default: '40px',
            } as PropOptions<string>,
        },

        computed: {
            style(): Record<string, string> {
                return {
                    enableBackground: 'new 0 0 122.88 106.42',
                    width: this.size,
                    height: this.size,
                }
            }
        },
    })
</script>
