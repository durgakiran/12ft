import { useAtom } from "jotai";
import Logger from "js-logger";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageContainer from "../components/page-container/page-container";
import SearchContainer from "../components/search-container/searchContainer";
import { globalWriteOnly, URLAtom } from "../state/atoms/globals";

const Proxy: NextPage = () => {
    const [_, setGlobalState] = useAtom(globalWriteOnly);
    const [URL] = useAtom(URLAtom);
    const { query } = useRouter();
    

    useEffect(() => {
        if (query.q && !URL) {
            Logger.info('got this url from query', query.q);
            setGlobalState({ URL: query.q });
        }
    }, [query]);

    return (
        <div>
            <div className="overflow-auto">
                <SearchContainer />
                <PageContainer />
            </div>
        </div>
    )
}

export default Proxy;
