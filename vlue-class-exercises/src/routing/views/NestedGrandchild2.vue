<template>
    <section class="content">
        <hr>
        <h4>Nested grandchild view 2.2</h4>
        <p>
            Called on <strong>{{date}}</strong>
        </p>
        <p v-for="index in 15" :key="`lorem-${index}`">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
        </p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'NestedGrandchild2',
    })
    export default class extends Vue {
        get date(): string {
            const date = parseInt(this.$route.params.timestamp);
            return new Date(date).toString();
        }

        onCloseModalClick() {
            this.$router.back();
        }
    }
</script>
