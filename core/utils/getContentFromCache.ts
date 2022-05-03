export default async function getContentFromCache(url: string) {
  const content = await fetch(
    `${window.location.origin}/api/web/cache?url=${url}`,
    { headers: { "content-type": "text/html" } }
  );
  const text = await content.text();
  return text;
}
