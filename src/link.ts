import {html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
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

    @query('a')
        link: HTMLAnchorElement;

    override connectedCallback() {
        super.connectedCallback();
        if (this.disabled) {
            addEventListener('click', event => {
                event.preventDefault();
                return false;
            });
        }
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
