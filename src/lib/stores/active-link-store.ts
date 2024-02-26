import { writable } from "svelte/store";

export const activeLinkStore = writable<null | string>(null);