import {html, LitElement, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import clsx from 'clsx';
import {type} from 'shared/type';
import {styles} from './badge.less';
import {x} from 'shared/icon';

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

    @property({type: Boolean})
    closable = false;

    handler = () => {
        if (!this.disabled) this.dispatchEvent(new CustomEvent('close'));
    };

    classNames = () =>
        clsx(
            'badge',
            {[`type-${this.type}`]: this.type},
            {noborder: this.noborder},
            {disabled: this.disabled},
            {rounded: this.rounded},
            {closable: this.closable}
        );

    override render() {
        return html`
            <div class=${this.classNames()}>
                <slot></slot>
                ${this.closable
                    ? html`<button @click=${this.handler}>${x}</button>`
                    : nothing}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-badge': Badge;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-badge': Badge;
        }
    }
}
