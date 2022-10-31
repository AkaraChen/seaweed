import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { loadingAlt } from './util/icon';
import { styles } from '#/loading.less';

@customElement('sw-loading')
export class Loading extends LitElement {
    static styles = styles;

    @property()
    size = '24px';

    @property()
    color = '#bbb';

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
