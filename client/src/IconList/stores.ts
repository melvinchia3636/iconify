import { writable } from "svelte/store";

export const currentIcon = writable<string | null>(null);
export const currentIconSet = writable<string | null>(null);