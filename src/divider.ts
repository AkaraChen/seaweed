import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from '#/divider.less';
import className from '@akrc/classnames';
import {postionArray, position} from '../util/type';

@customElement('sw-divider')
export class Divider extends LitElement {
    static override styles = styles;

    @property()
        text: string;

    @property()
        position: position = 'medium';

    @property({type: Boolean})
        vertical: boolean;

    classNames = () => className(
        'divider',
        {[`position-${this.position}`]: postionArray.includes(this.position)},
        {vertical: this.vertical}
    );

    override render() {
        return html`
          <div class=${this.classNames()}>
            <div class='left-box'></div>
                <div class='center-box'>
                    ${this.text}
                </div>
            <div class='right-box'></div>
          </div>
        `;
    }
}
