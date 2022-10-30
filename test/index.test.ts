import { test, expect } from 'vitest';
import '../dist/index.js';
import { formatTag, list } from './util.js';

test('all', () => {
    list.forEach((item) => {
        document.body.innerHTML += formatTag(item);
    });
    list.forEach((item) => {
        expect(document.querySelectorAll(item).length).not.toBe(0);
    });
});
