import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Reactify, size } from 'shared/type';
export * from './form-item'

@customElement('sw-form')
export class Form extends LitElement {
    @property()
    size: size = 'normal';

    override render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-form': Form;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-form': Reactify<Form>;
        }
    }
}
