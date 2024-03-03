import { writable } from "svelte/store";

export const drawerOpenedStore = writable<Boolean>(false);