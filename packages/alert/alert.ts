import {html, LitElement, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import clsx from 'clsx';
import {type} from 'shared/type';
import {
    ErrorRound, InfoRound, SuccessRound, WarningRound
} from 'shared/icon';
import {styles} from './alert.less';

@customElement('sw-alert')
export class Alert extends LitElement {
    static override styles = styles;

    @property()
        title: string;

    @property()
        type: type = 'info';

    @property({type: Boolean})
        fill = false;

    @property()
        border: 'none' | 'top' | 'left' = 'none';

    @property({type: Boolean})
        outline = false;

    iconHTML() {
        switch (this.type) {
        case 'info': {
            return InfoRound;
        }
        case 'success': {
            return SuccessRound;
        }
        case 'warning': {
            return WarningRound;
        }
        case 'error': {
            return ErrorRound;
        }
        }
    }

    classNames = () =>
        clsx(
            'alert',
            {[`type-${this.type}`]: this.type},
            {fill: this.fill},
            {[`border-${this.border}`]: !this.fill && this.border !== 'none'},
            {outline: this.outline}
        );

    override render() {
        return html`
          <div class=${this.classNames()}>
              <div class="icon-container">${this.iconHTML()}</div>
              <div>
                  ${this.title ? html`<div class="title">${this.title}</div>` : nothing}
                  <slot></slot>
              </div>
          </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-alert': Alert
    }
}
