import Logger from 'js-logger';
import { useEffect, useState } from 'react';

export default function useKeyPressAlt(key: string) {
    const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            Logger.debug("KEY PRESSED", event.code);
            if (event.altKey && !event.ctrlKey && !event.shiftKey) {
                setIsKeyPressed(('Key' + key) === event.code || ('Key' + key.toUpperCase()) === event.code);
            } else {
                setIsKeyPressed(false);
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    return isKeyPressed;
}
