import clsx from 'clsx';
import 'divider/divider';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Reactify } from 'shared/type';
import { styles } from './breadcrumb-item.less';

@customElement('sw-breadcrumb-item')
export class BreadcrumbItem extends LitElement {
    static override styles = styles;

    @property()
    active = false;

    clsx = () => clsx({ active: this.active });

    override render() {
        return html`<li class=${this.clsx()}>
            <span><slot></slot></span>
        </li>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-breadcrumb-item': BreadcrumbItem;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-breadcrumb-item': Reactify<BreadcrumbItem>;
        }
    }
}
