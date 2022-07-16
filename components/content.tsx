import { Loading } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import { GOOGLE_CACHE_ELEMENT_ID } from '../common/constants/regpexp';
import removeDOMElementUsingId from '../core/DOM/parseHTMLDoc';
import { APIResponse } from '../core/utils/apiErrorResponse';
import getContentFromCache from '../core/utils/getContentFromCache';
import validUrl from '../core/utils/validURI';

export default function Content({ url }: { url: string }) {
    const [cachedContent, setCachedContent] = useState<string>();
    const [loadingContent, setLoadingContent] = useState(false);

    const fetchResponse = async () => {
        let content = await getContentFromCache(url) as APIResponse;
        if (typeof content.data === 'string') {
            const domResponse = removeDOMElementUsingId(content.data, GOOGLE_CACHE_ELEMENT_ID);
            setCachedContent(domResponse);
        } else {
            console.log(content);
        }
        setLoadingContent(false);
    };

    useEffect(() => {
        if (validUrl(url)) {
            setLoadingContent(true);
            fetchResponse();
        }
    }, [url]);

    if (loadingContent) {
        return (
            <div>
                <Loading type='secondary'>Loading</Loading>
            </div>
        );
    }

    if (cachedContent) {
        return <div dangerouslySetInnerHTML={{ __html: cachedContent }}></div>;
    }

    return (
        <>
            <h2>Invalid URL</h2>
            <p>Enter valid url</p>
        </>
    );
}
