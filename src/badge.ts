import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import className from '@akrc/classnames';
import { type } from './util/type';
import styles from '#/badge.css';
import baseStyles from '#/base.css';

@customElement('sw-badge')
export class Badge extends LitElement {
    static styles = [baseStyles, styles];

    @property()
    type: type | 'normal' = 'normal';

    @property({ type: Boolean })
    noborder: false;

    @property({ type: Boolean })
    disabled: false;

    classNames = () =>
        className(
            'badge',
            { [`type-${this.type}`]: this.type },
            { noborder: this.noborder },
            { disabled: this.disabled }
        );

    render() {
        return html`<div class=${this.classNames()}><slot></slot></div>`;
    }
}
