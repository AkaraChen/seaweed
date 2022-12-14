import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { loadingAlt } from 'shared/icon';
import { Reactify } from 'shared/type';
import { styles } from './loading.less';

@customElement('sw-loading')
export class Loading extends LitElement {
    static override styles = styles;

    @property()
    size = '24px';

    @property()
    color = '#bbb';

    override render() {
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
                svg * {
                    color: ${this.color};
                }
            </style>
            ${loadingAlt}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-loading': Loading;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-loading': Reactify<Loading>;
        }
    }
}
