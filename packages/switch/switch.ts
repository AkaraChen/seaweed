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
          <div>
            <div class=${this.classNames()}>
                <label>
                    <input
                        type="checkbox"
                        @input=${this.handler}
                        ?checked=${this.checked}
                        ?disabled=${this.disabled}
                    />
                    <span class="slider"></span>
                </label>
            </div>
            <span><slot></slot></span>
          </div>
        `;
    }
}
