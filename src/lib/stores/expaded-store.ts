import { getContext, setContext } from "svelte";
import { type Writable, writable } from "svelte/store";

const expandedCtx = Symbol();

export const setExpandedContext = () => {
    const store = writable(false);
    setContext(expandedCtx, store);
    return store;
}

export const getExpanded = () => {
    return getContext<Writable<Boolean>>(expandedCtx);
}