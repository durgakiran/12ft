import { Loading, Page } from '@geist-ui/core';
import { useAtom } from 'jotai';
import Logger from 'js-logger';
import { useEffect, useState } from 'react';
import { GOOGLE_CACHE_ELEMENT_ID } from '../common/constants/regpexp';
import removeDOMElementUsingId from '../core/DOM/parseHTMLDoc';
import { APIResponse } from '../core/utils/apiErrorResponse';
import getContentFromCache from '../core/utils/getContentFromCache';
import validUrl from '../core/utils/validURI';
import { URLAtom } from '../state/atoms/globals';

export default function Content() {
    const [URL] = useAtom(URLAtom);
    const [cachedContent, setCachedContent] = useState<string>();
    const [loadingContent, setLoadingContent] = useState(false);

    const fetchResponse = async () => {
        Logger.info('fetching response for: ', URL);
        let content = await getContentFromCache(URL) as APIResponse;
        if (typeof content.data === 'string') {
            const domResponse = removeDOMElementUsingId(content.data, GOOGLE_CACHE_ELEMENT_ID);
            setCachedContent(domResponse);
        } else {
            Logger.error('expected response in string format, instead got: ', content);
        }
        setLoadingContent(false);
    };

    useEffect(() => {
        if (validUrl(URL)) {
            Logger.info('loading state: ', loadingContent);
            fetchResponse();
            setLoadingContent(true);
        }
    }, [URL]);

    if (loadingContent) {
        return (
            <Page padding={0} margin={0}>
                <div>
                    <Loading type='secondary'>Loading</Loading>
                </div>
            </Page>
        );
    }

    if (cachedContent) {
        return (
            <Page padding={0} margin={0}>
                <div dangerouslySetInnerHTML={{ __html: cachedContent }}></div>;
            </Page>
        )
    }

    if (!URL) {
        return <></>
    }

    return (
        <Page padding={0} margin={0}>
            <h2>Invalid URL</h2>
            <p>Enter valid url</p>
        </Page>
    );
}
