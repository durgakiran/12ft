import { useEffect, useState } from 'react';

export default function useKeyPressAlt(key: string) {
    const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.altKey && !event.ctrlKey && !event.shiftKey) {
                setIsKeyPressed(key === event.key);
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
