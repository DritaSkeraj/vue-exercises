<template>
    <section class="content">
        <h2>Another page</h2>
        <p>
            Called on <strong>{{date}}</strong>
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'AnotherPage',
    })
    export default class extends Vue {
        get date(): string {
            const date = parseInt(this.$route.params.timestamp);
            return new Date(date).toString();
        }   
    }
</script>
