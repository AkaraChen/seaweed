import className from '@akrc/classnames';
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {
    size, sizeArray, type, typeArray
} from '../util/type';
import {styles} from '#/input.less';
import {handleInput} from '../util/event';

@customElement('sw-input')
export class Input extends LitElement {
    static override styles = styles;

    @property()
        type: type | 'normal' = 'normal';

    @property()
        size: size = 'normal';

    @property()
        placeholder: string;

    classNames = () => className(
        {[`type-${this.type}`]: [...typeArray, 'normal'].includes(this.type)},
        {[`size-${this.size}`]: sizeArray.includes(this.size)}
    );

    private handler = (event: Event) => handleInput(event, this);

    override render() {
        return html`<input class=${this.classNames()} placeholder=${this.placeholder} @input=${this.handler}></input>`;
    }
}
