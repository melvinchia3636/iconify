import { writable } from "svelte/store";

export const currentIcon = writable<string | null>(null);
export const currentIconSet = writable<string | null>(null);
export const currentColor = writable<string>("");
export const currentWidth = writable<number>(172);
export const currentHeight = writable<number>(172);
export const currentFlipHorizontal = writable<boolean>(false);
export const currentFlipVertical = writable<boolean>(false);
export const currentRotate = writable<number>(0);