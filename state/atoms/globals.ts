import { atom } from "jotai";


export const globalAppState = atom({
    isModalStateAtom: false,
    URL: ''
});
export const URLAtom = atom((get) => get(globalAppState).URL);
