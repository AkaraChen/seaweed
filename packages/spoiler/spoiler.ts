import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styles} from './spoiler.less';

@customElement('sw-spoiler')
export default class Spoiler extends LitElement {
    static override styles = styles;

    @property()
        event: 'hover' | 'click' = 'click';

    @state()
        clear = false;

    handler(event: 'hover' | 'click') {
        if (event === this.event) {
            this.clear = !this.clear;
        }
    }

    override connectedCallback() {
        super.connectedCallback();
        this.addEventListener('pointerenter', () => this.handler('hover'));
        this.addEventListener('pointerleave', () => this.handler('hover'));
        this.addEventListener('click', () => this.handler('click'));
    }

    override render() {
        return html`
          <span class=${this.clear ? '' : 'blur'}>
              <slot></slot>
          </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-spoiler': Spoiler;
    }
}
