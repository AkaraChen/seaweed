import {LitElement, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import clsx from 'clsx';
import {styles} from './title.less';
import {getSize} from 'shared/style';

@customElement('sw-title')
export class Title extends LitElement {
    static override styles = styles;

    @property()
    level = 1;

    @property()
    size = undefined;

    @property()
    decorator: false;

    classnames = () =>
        clsx(
            'title',
            {[`level-${this.level}`]: this.level},
            {decorator: this.decorator}
        );

    render() {
        return html`<p
            class=${this.classnames()}
            style="font-size: ${getSize(this.size)}"
        >
            <slot></slot>
        </p>`;
    }
}
