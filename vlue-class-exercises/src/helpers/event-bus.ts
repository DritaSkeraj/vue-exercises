import Vue from 'vue';

function createEventBus() {
    const vue = new Vue;

    return {
        on: (event: string | string[], callback: Function) => vue.$on(event, callback),
        once: (event: string | string[], callback: Function) => vue.$once(event, callback),
        off: (event?: string | string[], callback?: Function) => vue.$off(event, callback),
        emit: (event: string, ...args: any[]) => vue.$emit(event, ...args),
    }
}

export const eventBus = createEventBus();
