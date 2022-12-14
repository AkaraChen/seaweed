import {fixture} from '@open-wc/testing';
import {LitElement} from 'lit';
import {expect} from 'vitest';

export const render = async (tagName: string, constructor: LitElement) => {
    const element = await fixture(`<${tagName}></${tagName}>`) as typeof constructor;
    expect(element.shadowRoot).not.toBeNull();
    expect(element instanceof HTMLElement).toBeTruthy();
};
