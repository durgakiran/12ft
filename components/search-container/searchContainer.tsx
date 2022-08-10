import { Page } from "@geist-ui/core";
import { useAtom } from "jotai"
import Logger from "js-logger";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useKeyPressAlt from "../../common/hooks/useKeyPressAlt";
import { globalAppState } from "../../state/atoms/globals"
import Default from "../default";
import SearchModal from "../search-modal/search-modal";
import { SearchShortcut } from "../search-shortcut/search-shortcut";

function SearchContainer() {
    const [ state, setState ] = useAtom(globalAppState);
    const router = useRouter();
    const isKeyPressed = useKeyPressAlt('k');


    useEffect(() => {
        if (isKeyPressed) {
            setState({ ...state, isModalStateAtom: true  });
        }
    }, [isKeyPressed]);

    useEffect(() => {
        if (state.URL && !state.isModalStateAtom) {
            Logger.info('current route', router.route);
            router.push(`proxy?q=${state.URL}`);
        }
    }, [state]);

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
