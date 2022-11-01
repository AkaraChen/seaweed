import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import className from '@akrc/classnames';
import { styles } from '#/switch.less';
import { size } from './util/type';
import { handleCheckbox } from './util/event';
import './loading';

@customElement('sw-switch')
export class Switch extends LitElement {
    static styles = styles;

    @property({ type: Boolean })
    checked = false;

    @property({ type: Boolean })
    disabled: boolean;

    @property()
    size: size = 'normal';

    @property({ type: Boolean })
    loading = false;

    loadingHTML() {
        if (this.loading) {
            let size: number;
            switch (this.size) {
                case 'normal': {
                    size = 18;
                    break;
                }
                case 'large': {
                    size = 22;
                    break;
                }
                case 'small': {
                    size = 14;
                    break;
                }
            }
            return html`<sw-loading size="${size}px"></sw-loading>`;
        }
    }

    private handler = (event: Event) => handleCheckbox(event, this);

    classNames = () =>
        className(
            'switch',
            { [`size-${this.size}`]: this.size },
            { disabled: this.disabled || this.loading }
        );

    render() {
        return html`<div class=${this.classNames()}>
            <label>
                <input
                    type="checkbox"
                    @input=${this.handler}
                    ?checked=${this.checked}
                    ?disabled=${this.disabled}
                />
                <span class="slider"> ${this.loadingHTML()} </span>
            </label>
        </div>`;
    }
}
