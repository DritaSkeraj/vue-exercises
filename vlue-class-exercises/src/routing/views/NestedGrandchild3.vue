<template>
    <section class="content">
        <hr>
        <h4>Nested grandchild view 2.3</h4>

        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="notification is-warning">
                    <strong>Called on {{date}}</strong>
                </div>
            </div>
            <button class="modal-close is-large" @click="onCloseModalClick"></button>
        </div>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'NestedGrandchild3',
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
