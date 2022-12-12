/* eslint-disable no-shadow */
import {LitElement, html, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles as itemStyles} from './form_item.less';
import {size} from 'shared/type';
import clsx from 'clsx';
import {styles as styles} from './form.less';
import {getFormSize} from 'shared/form';

@customElement('sw-form')
export class Form extends LitElement {
    static override styles = styles;

    @property()
        size: size = 'normal';

    // eslint-disable-next-line class-methods-use-this
    override render() {
        return html`<slot></slot>`;
    }
}

@customElement('sw-form-item')
export class FormItem extends LitElement {
    static override styles = itemStyles;

    @property()
        label: string;

    @property()
        size: size;

    classNames = () => clsx(
        `size-${this.size || getFormSize(this) || 'normal'}`
    );

    override render() {
        const label = this.label ? html`<span>${this.label}:</span>` : nothing;
        return html`
          <label class=${this.classNames()}>
              ${label}
              <slot></slot>
          </label>
        `;
    }
}
