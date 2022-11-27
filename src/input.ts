import className from '@akrc/classnames';
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {type, typeArray} from '../util/type';
import {styles} from '#/input.less';

@customElement('sw-input')
export class Input extends LitElement {
    static override styles = styles;

    @property()
        type: type | 'normal' = 'normal';

    @property()
        placeholder: string;

    classNames = () => className(
        {[`type-${this.type}`]: [...typeArray, 'normal'].includes(this.type)}
    );

    override render() {
        return html`<input class=${this.classNames()} placeholder=${this.placeholder}></input>`;
    }
}
