import removeDOMElementUsingId from '../../../../core/DOM/parseHTMLDoc';

enum SMOOTH_CASE {
    MOCK_HTML = '<div id="something">something</div><div id="something-else">something else</div>',
    REG_STRING = '\"something\"',
    OUTPUT_HTML = '<div id="something"></div><div id="something-else">something else</div>',
}

enum EMPTY_ID {
    MOCK_HTML = '<div id="something">something</div><div id="something-else">something else</div>',
    REG_STRING = '',
}

describe('Remove dom element using id as identifier', () => {
    it('should remove if valid id is present', () => {
        const newHTML = removeDOMElementUsingId(SMOOTH_CASE.MOCK_HTML, new RegExp(SMOOTH_CASE.REG_STRING));
        expect(newHTML).toBe(SMOOTH_CASE.OUTPUT_HTML);
    });

    it('should do nothing if id is not present', () => {
        const newHTML = removeDOMElementUsingId(EMPTY_ID.MOCK_HTML, new RegExp(EMPTY_ID.REG_STRING));
        expect(newHTML).toBe(EMPTY_ID.MOCK_HTML);
    });
});
