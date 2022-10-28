import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { type } from './util/type';
import className from '@akrc/classnames';
import { ErrorRound, InfoRound, SuccessRound, WarningRound } from './util/icon';
import { fontFallback } from './util/style';

@customElement('sw-alert')
export class Alert extends LitElement {
    static styles = css`
        ${fontFallback}
        .alert {
            --bg: #e6f7ff;
            --icon: #1890ff;
            background-color: var(--bg);
            padding: 12px 16px;
            font-size: 16px;
            display: flex;
            align-items: center;
            color: #2d3748;
            border-radius: 2px;
            margin: 0.5em 0;
        }
        .icon-container {
            height: inherit;
            display: flex;
            align-items: center;
        }
        .icon {
            width: 20px;
            height: 20px;
            margin-right: 1em;
            color: var(--icon);
        }
        .title {
            font-weight: 500;
        }
        .alert.type-success {
            --bg: #f0f9eb;
            --icon: #38a169;
        }
        .alert.type-warning {
            --bg: #fdf6ec;
            --icon: #dd6b20;
        }
        .alert.type-error {
            --bg: #fef0f0;
            --icon: #e53e3e;
        }
        @media (prefers-color-scheme: dark) {
            .alert {
                opacity: 0.8;
            }
        }
        .alert.fill {
            background-color: var(--icon);
            color: white;
        }
        .alert.fill .icon {
            color: white;
        }
        .alert.border-left {
            border-left: 5px var(--icon) solid;
        }
        .alert.border-top {
            border-top: 5px var(--icon) solid;
        }
    `;

    @property()
    title: string;

    @property()
    type: type = 'info';

    @property({ type: Boolean })
    fill: boolean = false;

    @property()
    border: 'top' | 'left' = undefined;

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
            { [`border-${this.border}`]: !this.fill && this.border }
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
