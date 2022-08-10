import { atom } from 'jotai';

export const globalAppState = atom({
    isModalStateAtom: false,
    URL: '',
});
export const URLAtom = atom((get) => get(globalAppState).URL);
export const globalWriteOnly = atom(
    null,
    (get, set, update: Record<string, any>) => {
        set(globalAppState, (prev) => {
            return { ...prev, ...update };
        });
    }
);
