<template>
    <div class="columns is-multiline">
        <div 
            class="column"
            :class="size"
            v-for="(item, index) in items" 
            :key="`grid-${index}`">
            <slot :item="item"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({
        name: 'Grid',
    })
    export default class extends Vue {
        @Prop({
            type: Array,
            default: () => [],
        }) 
        items!: [];

        @Prop({
            type: String,
            default: 'is-one-third',
        }) 
        size!: string;
    }
</script>
