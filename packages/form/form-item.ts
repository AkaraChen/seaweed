import clsx from 'clsx';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getFormSize } from 'form/util';
import { Reactify, size } from 'shared/type';
import { styles } from './form-item.less';

@customElement('sw-form-item')
export class FormItem extends LitElement {
    static override styles = styles;

    @property()
    label: string;

    @property()
    size: size;

    clsx = () => clsx(`size-${this.size || getFormSize(this) || 'normal'}`);

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
