import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '#/link.less';
import className from '@akrc/classnames';

@customElement('sw-link')
export class Link extends LitElement {
    static styles = [styles];

    @property({ type: Boolean })
    disabled = false;

    @property({ type: Boolean })
    underline = false;

    render() {
        return html`<a class=${this.classNames()}><slot></slot></a>`;
    }
    classNames = () =>
        className({ disabled: this.disabled }, { underline: this.underline });
}
