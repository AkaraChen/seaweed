import {LitElement, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import clsx from 'clsx';
import {styles} from './title.less';
import {getSize, isValidColor} from 'shared/style';
import {type, typeArray} from 'shared/type';

@customElement('sw-title')
export class Title extends LitElement {
    static override styles = styles;

    @property()
    level = 1;

    @property()
    size = undefined;

    @property()
    decorator: false;

    @property()
    color = '';

    @property()
    type: type = 'info';

    classnames = () =>
        clsx(
            'title',
            {[`level-${this.level}`]: this.level},
            {decorator: this.decorator},
            {[`type-${this.type}`]: typeArray.includes(this.type)}
        );

    render() {
        const color = isValidColor(this.color) ? this.color : '';
        return html`<p
            class=${this.classnames()}
            style="font-size: ${getSize(this.size)};color: ${color}"
        >
            <slot></slot>
        </p>`;
    }
}
