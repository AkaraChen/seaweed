import {LitElement, html, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './form.less';

@customElement('sw-form-item')
export class FormItem extends LitElement {
    static override styles = styles;

    @property()
        label: string;

    override render() {
        const label = this.label ? html`<span>${this.label}:</span>` : nothing;
        return html`
          <label>
              ${label}
              <slot></slot>
          </label>
        `;
    }
}
