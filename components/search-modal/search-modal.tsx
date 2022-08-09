import { Input, Modal } from "@geist-ui/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { globalAppState} from "../../state/atoms/globals";

export default function SearchModal() {
    const [state, setState] = useAtom(globalAppState);
    const [URL, setURL] = useState('');

    const closeHandler = () => {
        setState({ ...state, URL, isModalStateAtom: false });
    };

    const closeWithOutURL = () => {
        setState({ ...state, isModalStateAtom: false });
    }

    return (
        <Modal visible={state.isModalStateAtom} onClose={closeHandler}>
            <Modal.Title>Enter Valid URI</Modal.Title>
            <Modal.Content>
                <div className='w-full flex flex-1'>
                    <Input
                        clearable
                        placeholder='enter your url'
                        value={URL}
                        onChange={(e) => setURL(e.target.value)}
                        width='100%'
                        autoFocus
                    />
                </div>
            </Modal.Content>
            <Modal.Action passive onClick={closeWithOutURL}>
                Cancel
            </Modal.Action>
            <Modal.Action
                onClick={() => {
                    closeHandler();
                }}
            >
                Submit
            </Modal.Action>
        </Modal>
    );
}
