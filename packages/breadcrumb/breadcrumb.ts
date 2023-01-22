import 'divider/divider';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Reactify } from 'shared/type';
import { BreadcrumbItem } from './breadcrumb-item';

@customElement('sw-breadcrumb')
export class Breadcrumb extends LitElement {
    static override styles = css`
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            gap: 0.5em;
        }
    `;

    override connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            const slot = this.renderRoot.querySelector('slot');
            const elements = (slot as HTMLSlotElement).assignedElements({
                flatten: true
            });

            for (let index = 0; index < elements.length - 1; index++) {
                const element = elements[index];
                const divider = document.createElement('sw-divider');
                divider.slash = true;
                element.parentElement.insertBefore(
                    divider,
                    element.nextElementSibling
                );
            }
            // eslint-disable-next-line no-use-before-define
            const last = elements.at(-1) as BreadcrumbItem;
            last.active = true;
        });
    }

    override render() {
        return html`<nav>
            <ul>
                <slot></slot>
            </ul>
        </nav>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-breadcrumb': Breadcrumb;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-breadcrumb': Reactify<Breadcrumb>;
        }
    }
}
