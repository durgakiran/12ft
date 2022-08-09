import { Page } from "@geist-ui/core";
import { useAtom } from "jotai"
import { useEffect } from "react";
import useKeyPressAlt from "../../common/hooks/useKeyPressAlt";
import { globalAppState } from "../../state/atoms/globals"
import Default from "../default";
import SearchModal from "../search-modal/search-modal";
import { SearchShortcut } from "../search-shortcut/search-shortcut";

function SearchContainer() {
    const [ state, setState ] = useAtom(globalAppState);
    const isKeyPressed = useKeyPressAlt('k');


    useEffect(() => {
        if (isKeyPressed) {
            setState({ ...state, isModalStateAtom: true  });
        }
    }, [isKeyPressed]);

    const handleOnSearchButtonClick = () => {
        setState({ ...state, isModalStateAtom: true });
    }

    return (
        <>
            { !state.URL || state.isModalStateAtom ? <Default /> : null }
            <SearchModal />
            <SearchShortcut handleOnClick={handleOnSearchButtonClick} />
        </>
    );
};

export default SearchContainer;
