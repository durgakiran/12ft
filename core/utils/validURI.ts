import { isWebUri } from 'valid-url';

export default function validUrl(url: string): boolean {
    return !!isWebUri(url);
}