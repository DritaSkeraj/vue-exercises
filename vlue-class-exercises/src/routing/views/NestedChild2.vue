<template>
    <section class="content">
        <hr>
        <h3>Nested child view 2</h3>
        <p>
            Called on <strong>{{date}}</strong>
        </p>
        <p>
            😀 😃 😄 😁 😆 😅 😂
        </p>
        <router-view></router-view>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'NestedChild1',
    })
    export default class extends Vue {
        get date(): string {
            const date = parseInt(this.$route.params.timestamp);
            return new Date(date).toString();
        }
    }
</script>
