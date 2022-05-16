import { Input, Modal } from '@geist-ui/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function SearchModal({
    modalState,
    setValue,
    setModalState,
}: {
    modalState: boolean;
    setValue: Dispatch<SetStateAction<string>>;
    setModalState: Dispatch<SetStateAction<boolean>>;
}) {
    const [state, setState] = useState(false);
    const [URL, setURL] = useState<string>('');

    const closeHandler = () => {
        setState(false);
        setModalState(false);
    };

    useEffect(() => {
        setState(modalState);
    }, [modalState]);

    return (
        <Modal visible={state} onClose={closeHandler}>
            <Modal.Title>Enter Valid URI</Modal.Title>
            <Modal.Content>
                <div className='w-full flex flex-1'>
                    <Input
                        clearable
                        placeholder='enter your url'
                        onChange={(e) => setURL(e.target.value)}
                        width='100%'
                    />
                </div>
            </Modal.Content>
            <Modal.Action passive onClick={closeHandler}>
                Cancel
            </Modal.Action>
            <Modal.Action
                onClick={() => {
                    setValue(URL);
                    closeHandler();
                }}
            >
                Submit
            </Modal.Action>
        </Modal>
    );
}
