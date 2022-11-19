import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import className from '@akrc/classnames';
import {styles} from '#/switch.less';
import {size} from '../util/type';
import {handleCheckbox} from '../util/event';
import './loading';

@customElement('sw-switch')
export class Switch extends LitElement {
    static styles = styles;

    @property({type: Boolean})
        checked = false;

    @property({type: Boolean})
        disabled: boolean;

    @property()
        size: size = 'normal';

    @property({type: Boolean})
        loading = false;

    private handler = (event: Event) => handleCheckbox(event, this);

    classNames = () =>
        className(
            'switch',
            {[`size-${this.size}`]: this.size},
            {disabled: this.disabled},
            {loading: this.loading}
        );

    render() {
        return html`
          <div class=${this.classNames()}>
              <label>
                  <input
                      type="checkbox"
                      @input=${this.handler}
                      ?checked=${this.checked}
                      ?disabled=${this.disabled}
                  />
                  <span class="slider"></span>
              </label>
          </div>
        `;
    }
}
