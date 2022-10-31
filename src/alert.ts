import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { type } from './util/type';
import className from '@akrc/classnames';
import { ErrorRound, InfoRound, SuccessRound, WarningRound } from './util/icon';
import styles from '#/alert.css';
import baseStyles from '#/base.css';

@customElement('sw-alert')
export class Alert extends LitElement {
    static styles = [baseStyles, styles];

    @property()
    title: string;

    @property()
    type: type = 'info';

    @property({ type: Boolean })
    fill = false;

    @property()
    border: 'none' | 'top' | 'left' = 'none';

    titleHTML() {
        if (this.title) {
            return html`<div class="title">${this.title}</div> `;
        }
    }

    iconHTML() {
        switch (this.type) {
            case 'info':
                return InfoRound;
            case 'success':
                return SuccessRound;
            case 'warning':
                return WarningRound;
            case 'error':
                return ErrorRound;
        }
    }

    classNames = () =>
        className(
            'alert',
            { [`type-${this.type}`]: this.type },
            { fill: this.fill },
            { [`border-${this.border}`]: !this.fill && this.border !== 'none' }
        );

    render() {
        return html` <div class="${this.classNames()}">
            <div class="icon-container">${this.iconHTML()}</div>
            <div>
                ${this.titleHTML()}
                <slot></slot>
            </div>
        </div>`;
    }
}