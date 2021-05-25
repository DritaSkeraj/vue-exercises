<template>
    <section class="content">
        <h2>Nested parent page</h2>
        <p>Called on <strong>{{date}}</strong></p>

        <blockquote>
            This is a parent view. You can display children below.
        </blockquote>

        <transition 
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter">
            <router-view></router-view>
        </transition>
    </section>
</template>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'NestedParent',
    })
    export default class extends Vue {
        prevHeight: string = '0';

        get date(): string {
            const date = parseInt(this.$route.params.timestamp);
            return new Date(date).toString();
        }

        beforeLeave(element: HTMLElement) {
            this.prevHeight = getComputedStyle(element).height;
        }

        enter(element: HTMLElement) {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        }

        afterEnter(element: HTMLElement) {
            element.style.height = 'auto';
        }
    }
</script>
