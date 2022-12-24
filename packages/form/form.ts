/* eslint-disable no-shadow */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as itemStyles } from './form_item.less';
import { Reactify, size } from 'shared/type';
import clsx from 'clsx';
import { getFormSize } from 'shared/form';

@customElement('sw-form')
export class Form extends LitElement {
    @property()
    size: size = 'normal';

    // eslint-disable-next-line class-methods-use-this
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

@customElement('sw-form-item')
export class FormItem extends LitElement {
    static override styles = itemStyles;

    @property()
    label: string;

    @property()
    size: size;

    clsx = () =>
        clsx(`size-${this.size || getFormSize(this) || 'normal'}`);

    override render() {
        const label = this.label ? html`<span>${this.label}:</span>` : nothing;
        return html`
            <label class=${this.clsx()}>
                ${label}
                <slot></slot>
            </label>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-form-item': FormItem;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-form-item': Reactify<FormItem>;
        }
    }
}
