import JSSoup, { SoupTag } from 'jssoup';

export default function removeDOMElementUsingId(htmlString: string, id: RegExp) {
    let divId = findId(htmlString, id) || '';
    divId = divId.slice(1, divId.length - 1);
    const parsedHTML = parseHTML(htmlString);
    const targetElement = parsedHTML.find('div', { id: divId });
    (targetElement as unknown as SoupTag).contents = [];
    return parsedHTML.toString();
}

function findId(html: string, id: RegExp): string | null {
    const matchedSubstring = html.match(id);
    return matchedSubstring && matchedSubstring[0];
}

function parseHTML(htmlString: string) {
    return new JSSoup(htmlString);
}
