import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from '#/link.less';
import className from '@akrc/classnames';

@customElement('sw-link')
export class Link extends LitElement {
    static override styles = [styles];

    @property({type: Boolean})
        disabled = false;

    @property({type: Boolean})
        underline = false;

    @property()
        href: string;

    @property()
        target: '_blank' | '_parent' | '_self' | '_top' = '_blank';

    classNames = () =>
        className(
            {disabled: this.disabled},
            {underline: this.underline && !this.disabled}
        );

    override connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', (event:Event) => {
            if (this.disabled) {
                event.preventDefault();
            }
        });
    }

    override render() {
        return html`
          <a
              class=${this.classNames()}
              href=${this.href}
              target=${this.target}
          >
              <slot></slot>
          </a>
        `;
    }
}
