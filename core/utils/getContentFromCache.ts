export default async function getContentFromCache(url: string) {
    const response = await fetch(
        `${window.location.origin}/api/web/cache?url=${url}`);
    return response.json();
}
