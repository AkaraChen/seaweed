import {LitElement, html, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './card.less';
import clsx from 'clsx';
import {size, sizeArray} from 'shared/type';

@customElement('sw-card')
export class Card extends LitElement {
    static override styles = styles;

    @property()
        size: size;

    @property()
        title = '';

    classNames = () => clsx(
        'card',
        {[`size-${this.size}`]: sizeArray.includes(this.size)}
    );

    render() {
        return html`
          <div class=${this.classNames()}>
                ${this.title === ''
        ? html`<div class="title">${this.title}</div>`
        : nothing}
              </div>
        `;
    }
}
