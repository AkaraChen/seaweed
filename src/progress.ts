/* eslint-disable no-mixed-operators */
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from '#/progress.less';
import {
    typeArray, type, size, sizeArray
} from './util/type';
import className from '@akrc/classnames';

@customElement('sw-progress')
export class Progress extends LitElement {
    static styles = styles;

    @property({type: Number})
        value = 50;

    @property({type: Number})
        max = 100;

    @property()
        size: size = 'small';

    @property()
        type: type = 'info';

    classNames = () => className(
        {[`${this.type}`]: typeArray.includes(this.type)},
        {[`${this.size}`]: sizeArray.includes(this.size)}
    );

    render() {
        return html`
          <div class=${this.classNames()}>
            <span style="width: ${this.value / this.max * 100}%;"></span>
            </div>
        `;
    }
}
