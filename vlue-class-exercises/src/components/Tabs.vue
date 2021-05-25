<template>
    <div>
        <div class="tabs is-boxed">
            <ul>
                <li 
                    v-for="(tab, index) in tabs" 
                    :key="`tab-label-${index}`"
                    :class="tab.isVisible && 'is-active'"
                    @click="onClick(tab, index)">
                    <a>{{tab.label}}</a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Tab from '@components/Tab.vue';
    import { definePersistentVar } from '@helpers/persistent-var';

    const activeTabIndex = definePersistentVar<number>('active-tab-index');

    @Component({
        name: 'Tabs',
    })
    export default class extends Vue {
        protected tabs: Tab[] = [];

        registerChild(tab: Tab): void {
            const index = this.tabs.length;
            this.tabs.push(tab);

            if (index === activeTabIndex.value) {
                this.setActiveTab(tab, index);
            }
        }

        protected onClick(tab: Tab, index: number): void {
            this.setActiveTab(tab, index);
        }

        protected setActiveTab(tab: Tab, index: number) {
            this
                .tabs
                .filter(tab => tab.isVisible)
                .forEach(tab => tab.isVisible = false);

            tab.isVisible = true;
            activeTabIndex.value = index;
        }
    }
</script>
