import { createDecorator } from 'vue-class-component'

export const LogComputed = createDecorator((options, key: string) => {
    if (!options.computed) {
        return;
    }

    const computedProp = options.computed[key] as PropertyDescriptor || {};
    const originalGetter = computedProp.get;

    if (!originalGetter) {
        return;
    }

    computedProp.get = function (...args: any): any {
        const value = originalGetter.apply(this, args);
        console.log(`[computed] ${key}:`, value);
        return value;
    }
});

export const LogMethod = createDecorator((options, key: string) => {
    if (!options.methods) {
        return;
    }

    const originalMethod = options.methods[key];

    if (!originalMethod) {
        return;
    }

    options.methods[key] = function (...args: any): any {
        const value = originalMethod.apply(this, args);
        console.log(`[method] ${key}(${args.join(',')}):`, value || 'void');
        return value;
    }
});
