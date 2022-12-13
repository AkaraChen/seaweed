import {csrFixture} from '@lit-labs/testing/fixtures.js';
import {html} from 'lit';
import {expect} from '@esm-bundle/chai';

describe('test', async () => {
    const element = await csrFixture(
        html`<sw-alert>Hello</sw-alert>`,
        {modules: ['../alert.ts']}
    );
    expect(element.textContent).to.be('Hello');
});
