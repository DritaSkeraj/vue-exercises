import Vue, { CreateElement, VNode, VueConstructor, VNodeData } from 'vue';

export const hoc = (Component: VueConstructor, options: VNodeData) => Vue.extend({
    render(h: CreateElement): VNode {
        return h(Component, options);
    }
});
