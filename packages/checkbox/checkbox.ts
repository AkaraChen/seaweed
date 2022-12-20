import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import clsx from 'clsx';
import {Reactify, size} from 'shared/type';
import {styles} from './checkbox.less';
import {getFormSize} from 'shared/form';
import {Card} from '../card/card';

@customElement('sw-checkbox')
export class CheckBox extends LitElement {
    static override styles = styles;

    @property({type: Boolean})
    checked = false;

    @property()
    size: size;

    @property({type: Boolean})
    disabled: boolean;

    @property({type: Boolean})
    rounded = false;

    classNames = () =>
        clsx(`size-${this.size || getFormSize(this) || 'normal'}`, {
            rounded: this.rounded
        });

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

    override render() {
        return html`
            <label for="checkbox" class=${this.classNames()}>
                <input
                    type="checkbox"
                    @input=${this.handler}
                    ?disabled=${this.disabled}
                    ?checked=${this.checked}
                    id="checkbox"
                    name="checkbox"
                />
                <span><slot></slot></span>
            </label>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-checkbox': CheckBox;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-checkbox': Reactify<Card>;
        }
    }
}
