<template>
    <section class="content">
        <h2>Home page</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
        </p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { NavigationGuardNext, Route } from 'vue-router';


    @Component({
        name: 'Home',
        
        beforeRouteEnter (to: Route, from: Route, next: NavigationGuardNext) {
            // called before the route that renders this component is confirmed.
            // does NOT have access to `this` component instance,
            // because it has not been created yet when this guard is called!
            console.log('beforeRouteEnter')
            next()
        },

        beforeRouteUpdate (to: Route, from: Route, next: NavigationGuardNext) {
            // called when the route that renders this component has changed.
            // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
            console.log('beforeRouteUpdate')
            next()
        },

        beforeRouteLeave (to: Route, from: Route, next: NavigationGuardNext) {
            // called when the route that renders this component is about to
            // be navigated away from.
            // has access to `this` component instance.
            console.log('beforeRouteLeave')
            next()
        },
    })
    export default class extends Vue {}
</script>
