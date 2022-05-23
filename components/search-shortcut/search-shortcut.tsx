import { Button } from '@geist-ui/core';

export function SearchShortcut({ handleOnClick }: { handleOnClick: () => void }) {
    
    const onButtonClick = () => {
        handleOnClick();
    }

    return (
        <div className='fixed right-5 bottom-5'>
            <Button scale={2/3} shadow type='secondary' onClick={() => onButtonClick()}>
                Press Alt + k  to enter web URL
            </Button>
        </div>
    );
}
