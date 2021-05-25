import kebabCase from 'lodash/kebabCase';

export const definePersistentVar = <T = any>(id: string, context: string = window.location.pathname) => {
    const key = `${kebabCase(id)}@${kebabCase(context)}`;
    const storage = {
        id, 
        context,
    }

    return Object.defineProperty(storage, 'value', {
        configurable: false,
        enumerable: false,

        get(): T | undefined {
            const value = window.localStorage.getItem(key);

            if (!value) {
                return;
            }

            return JSON.parse(value);
        },

        set(value: T): void {
            window.localStorage.setItem(key, JSON.stringify(value));
        },
    });
}
