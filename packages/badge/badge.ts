import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import clsx from 'clsx';
import {type} from 'shared/type';
import {styles} from './badge.less';

@customElement('sw-badge')
export class Badge extends LitElement {
    static override styles = styles;

    @property()
        type: type | 'normal' = 'normal';

    @property({type: Boolean})
        noborder = false;

    @property({type: Boolean})
        disabled = false;

    @property({type: Boolean})
        rounded = false;

    classNames = () =>
        clsx(
            'badge',
            {[`type-${this.type}`]: this.type},
            {noborder: this.noborder},
            {disabled: this.disabled},
            {rounded: this.rounded}
        );

    override render() {
        return html`
          <div class=${this.classNames()}>
              <slot></slot>
          </div>
        `;
    }
}
