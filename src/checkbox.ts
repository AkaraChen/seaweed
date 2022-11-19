import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import className from '@akrc/classnames';
import {size} from '../util/type';
import {styles} from '#/checkbox.less';
import {handleCheckbox} from '../util/event';

@customElement('sw-checkbox')
export class CheckBox extends LitElement {
    static override styles = styles;

    @property({type: Boolean})
        checked = false;

    @property()
        size: size = 'normal';

    @property({type: Boolean})
        disabled: boolean;

    classNames = () =>
        className({[`size-${this.size}`]: this.size !== 'normal'});

    private handler = (event: Event) => handleCheckbox(event, this);

    override render() {
        return html`
          <div>
              <input
                  type="checkbox"
                  class=${this.classNames()}
                  @input=${this.handler}
                  ?disabled=${this.disabled}
                  ?checked=${this.checked}
                  id="checkbox"
              />
          </div>
        `;
    }
}
