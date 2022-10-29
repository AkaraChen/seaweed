import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { loadingAlt } from './util/icon';

@customElement('sw-loading')
export class Loading extends LitElement {
    static styles = css`
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        svg {
            animation: rotate 1.5s linear infinite;
            margin: 0;
        }
    `;

    @property()
    size = '24px';

    @property()
    color = '#bbb';

    @query('svg')
    icon: SVGElement;

    render() {
        return html`
            <style>
                :host {
                    height: ${this.size};
                }
                svg {
                    width: ${this.size};
                    height: ${this.size};
                    color: ${this.color};
                }
            </style>
            ${loadingAlt}
        `;
    }
}
