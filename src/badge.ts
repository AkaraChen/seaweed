import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import className from '@akrc/classnames';
import { type } from './util/type';

@customElement('sw-badge')
export class Badge extends LitElement {
    static styles = css`
        :host {
            display: inline;
        }
        .badge {
            --bg: #fafafa;
            --bd: #e0e0e6;
            --color: #333;
            background-color: var(--bg);
            border: var(--bd) solid 1px;
            border-radius: 2px;
            padding: 4px 8px;
            font-size: 14px;
            color: var(--color);
        }
        .badge.type-success {
            --bd: #18a058;
            --color: var(--bd);
            --bg: #edf5ef;
        }
        .badge.type-warning {
            --bd: #f0a020;
            --color: var(--bd);
            --bg: #fcf4e8;
        }
        .badge.type-info {
            --bd: #2080f0;
            --color: var(--bd);
            --bg: #ebf2fd;
        }
        .badge.type-error {
            --bd: #d03050;
            --color: var(--bd);
            --bg: #faf0f1;
        }
        @media (prefers-color-scheme: dark) {
            .badge {
                background-color: transparent;
            }
            .badge.type-normal {
                color: #ffffffd1;
            }
        }
        .badge.noborder {
            border: none;
            background-color: var(--bd);
            color: var(--bg);
        }
        .badge.noborder.type-normal {
            background-color: #eee;
            color: black;
        }
        @media (prefers-color-scheme: dark) {
            .badge.noborder {
                opacity: 0.9;
            }
            .badge.noborder.type-normal {
                background-color: #555;
                color: #ffffffd1;
            }
        }
        .badge.disabled {
            opacity: 0.3;
            user-select: none;
            cursor: no-drop;
        }
    `;

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
        return html`<div class=${this.classNames()}>
            <slot></slot>
        </div>`;
    }
}
