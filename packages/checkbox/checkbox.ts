import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import className from '@akrc/classnames';
import {size} from 'shared/type';
import {styles} from './checkbox.less';

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

    get value() {
        return this.shadowRoot.querySelector('input').checked;
    }

    set value(value: boolean) {
        this.shadowRoot.querySelector('input').checked = value;
    }

    private handler = (event: Event) => {
        const input = event.target as HTMLInputElement;
        this.value = input.checked;
    };

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
