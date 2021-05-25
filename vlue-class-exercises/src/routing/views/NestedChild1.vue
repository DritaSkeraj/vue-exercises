<template>
    <section class="content">
        <hr>
        <h3>Nested child view 1</h3>
        <p>
            Called on <strong>{{date}}</strong>
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
        </p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({
        name: 'NestedChild1',
    })
    export default class extends Vue {
        @Prop() timestamp!: string;

        get date(): string {
            const date = parseInt(this.timestamp);
            return new Date(date).toString();
        }
    }
</script>
