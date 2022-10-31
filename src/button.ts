import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { size, type } from './util/type';
import className from '@akrc/classnames';
import './loading';
import styles from '#/button.css';
import baseStyles from '#/base.css';

@customElement('sw-button')
export class Button extends LitElement {
    static styles = [baseStyles, styles];

    @property({ type: Boolean })
    primary = false;

    @property()
    size: size = 'normal';

    @property()
    type: type = 'info';

    @property({ type: Boolean })
    loading = false;

    @property({ type: Boolean })
    disabled = false;

    formatLoading = () => {
        if (this.loading) {
            const size = this.size === 'small' ? '14px' : '18px';
            const color = this.primary ? '#fff' : 'var(--font-color)';
            return html` <style>
                    sw-loading {
                        margin-right: 0.5em;
                    }
                    button.size-small sw-loading {
                        margin-right: 0.25em;
                    }
                </style>
                <sw-loading size=${size} color=${color}></sw-loading>`;
        }
    };

    classNames = () =>
        className(
            { primary: this.primary },
            { [`size-${this.size}`]: this.size },
            { [`type-${this.type}`]: this.type },
            { loading: this.loading }
        );

    render() {
        return html`<button
            class=${this.classNames()}
            ?disabled=${this.disabled}
        >
            ${this.formatLoading()}
            <p><slot></slot></p>
        </button>`;
    }
}
