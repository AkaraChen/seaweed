import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { size } from '@/util/type';
import className from '@akrc/classnames';
import { styles } from '#/checkbox.less';

@customElement('sw-checkbox')
export class CheckBox extends LitElement {
    static styles = styles;

    @property({ type: Boolean }) checked = false;

    @property() size: size = 'normal';

    @property({ type: Boolean }) disabled: boolean;

    @property() label = '';

    formatLabel() {
        if (this.label !== '') {
            return html`<label for="checkbox">${this.label}</label>`;
        }
    }

    classNames = () =>
        className({ [`size-${this.size}`]: this.size != 'normal' });

    private handler(e: Event) {
        const element = e.target as HTMLInputElement;
        const state = element.checked;
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: state,
                },
            })
        );
    }

    render() {
        return html`
            <div>
                <input
                    type="checkbox"
                    class=${this.classNames()}
                    @input=${this.handler}
                    ?disabled=${this.disabled}
                    ?checked=${this.checked}
                    id="checkbox"
                />
                ${this.formatLabel()}
            </div>
        `;
    }
}
