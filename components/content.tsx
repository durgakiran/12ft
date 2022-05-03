import { Loading } from "@geist-ui/core";
import { useEffect, useState } from "react";
import getContentFromCache from "../core/utils/getContentFromCache";
import validUrl from "../core/utils/validURI";

export default function Content({ url }: { url: string }) {
  const [cachedContent, setCachedContent] = useState<string>();
  const [loadingContent, setLoadingContent] = useState(false);

  const fetchResponse = async () => {
    const content = await getContentFromCache(url);
    setLoadingContent(false);
    setCachedContent(content);
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
        <Loading type="secondary">Loading</Loading>
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
