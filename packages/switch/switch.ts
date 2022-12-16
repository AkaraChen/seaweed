import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import clsx from 'clsx';
import {styles} from './switch.less';
import {size} from 'shared/type';
import 'loading/loading';
import {getFormSize} from 'shared/form';

@customElement('sw-switch')
export class Switch extends LitElement {
    static override styles = styles;

    @property({type: Boolean})
        checked = false;

    @property({type: Boolean})
        disabled: boolean;

    @property()
        size: size;

    @property({type: Boolean})
        loading = false;

    get value() {
        return this.shadowRoot.querySelector('input').checked;
    }

    set value(value: boolean) {
        this.shadowRoot.querySelector('input').checked = value;
    }

    private handler = (event: Event) => {
        const input = event.target as HTMLInputElement;
        this.value = input.checked;
    };

    classNames = () =>
        clsx(
            'switch',
            `size-${this.size || getFormSize(this) || 'normal'}`,
            {disabled: this.disabled},
            {loading: this.loading}
        );

    override render() {
        return html`
          <label class=${this.classNames()}>
              <input
                  type="checkbox"
                  @input=${this.handler}
                  ?checked=${this.checked}
                  ?disabled=${this.disabled}
                  id="switch"
              />
              <span class="slider"></span>
          </label>
          <label for="switch" class="slot">
              <slot></slot>
          </label>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-switch': Switch;
    }
}
