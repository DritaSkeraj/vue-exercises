export const asyncComponentTester = <T = Vue>(importPromise: Promise<T>, latency: number) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(importPromise) }, latency)
    })
}
