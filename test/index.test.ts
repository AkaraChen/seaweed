import {test, expect} from 'vitest';
import '../dist/index.js';
import {formatTag, list} from './util.js';

test('all', () => {
    for (const item of list) {
        document.body.innerHTML += formatTag(item);
    }
    for (const item of list) {
        expect(document.querySelectorAll(item).length).not.toBe(0);
    }
});
