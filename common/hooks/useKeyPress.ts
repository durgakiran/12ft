import { useEffect, useState } from 'react';

export default function useKeyPress(key: string) {
    const [keyPressed, setKeyPressed] = useState<string | null>(null);

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            console.log(event);
            setKeyPressed(event.key);
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    return key === keyPressed;
}
