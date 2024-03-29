import clsx from 'clsx';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getFormSize } from 'form/util';
import { Reactify, size, type, typeArray } from 'shared/type';
import { styles } from './input.less';

@customElement('sw-input')
export class Input extends LitElement {
    static override styles = styles;

    @property()
    type: type | 'normal' = 'normal';

    @property()
    size: size;

    @property()
    placeholder: string;

    get value() {
        return this.shadowRoot.querySelector('input').value;
    }

    set value(value) {
        this.shadowRoot.querySelector('input').value = value;
    }

    clsx = () =>
        clsx(
            {
                [`type-${this.type}`]: [...typeArray, 'normal'].includes(
                    this.type
                )
            },
            `size-${this.size || getFormSize(this) || 'normal'}`
        );

    private handler = (event: Event) => {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
    };

    override render() {
        return html`<input
            class=${this.clsx()}
            placeholder=${this.placeholder}
            @input=${this.handler}
        />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-input': Input;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-input': Reactify<Input>;
        }
    }
}
