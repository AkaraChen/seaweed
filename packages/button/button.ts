import clsx from 'clsx';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'loading/loading';
import { Reactify, size, type } from 'shared/type';
import { styles } from './button.less';

@customElement('sw-button')
export class Button extends LitElement {
    static override styles = styles;

    @property({ type: Boolean })
    primary = false;

    @property({ type: Boolean })
    secondary = false;

    @property({ type: Boolean })
    ghost = false;

    @property()
    size: size = 'normal';

    @property()
    type: type = 'info';

    @property({ type: Boolean })
    loading = false;

    @property({ type: Boolean })
    disabled = false;

    @property({ type: Boolean })
    rounded = false;

    loadingIcon = () => {
        const sizeString = this.size === 'small' ? '14px' : '18px';
        const color = this.primary ? '#fff' : '#666';
        return html`
            <style>
                sw-loading {
                    margin-right: 0.5em;
                }
                button.size-small sw-loading {
                    margin-right: 0.25em;
                }
            </style>
            <sw-loading size=${sizeString} color=${color}></sw-loading>
        `;
    };

    clsx = () =>
        clsx(
            { primary: this.primary },
            { [`size-${this.size}`]: this.size },
            { [`type-${this.type}`]: this.type },
            { loading: this.loading },
            { rounded: this.rounded },
            { secondary: this.secondary },
            { ghost: this.ghost }
        );

    override render() {
        return html`
            <button class=${this.clsx()} ?disabled=${this.disabled}>
                ${this.loading ? this.loadingIcon() : nothing}
                <p><slot></slot></p>
            </button>
        `;
    }
}

declare global {
    export interface HTMLElementTagNameMap {
        'sw-button': Button;
    }

    export namespace JSX {
        interface IntrinsicElements {
            'sw-button': Reactify<Button>;
        }
    }
}
