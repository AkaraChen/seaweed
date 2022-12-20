import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './linkcard.less';
import {target} from 'shared/type';

export interface LinkCardProperty {
    title: string;
    link: string;
    image?: string;
    target?: string;
    alt?: string;
}

@customElement('sw-link-card')
export class LinkCard extends LitElement {
    static override styles = [styles];

    @property()
    title: string;

    @property()
    link: string;

    @property()
    image: string;

    @property()
    target: target;

    @property()
    alt: string;

    formatLink = () => {
        try {
            return new URL(this.link).origin;
        } catch {
            return this.link;
        }
    };

    override render() {
        return html`
            <a href="${this.link}" target="${this.target}">
                <div class="head">
                    <h2 class="title">${this.title}</h2>
                    <p class="link">${this.formatLink()}</p>
                </div>
                ${this.image &&
                html`
                    <img
                        src=${this.image}
                        height="55"
                        width="55"
                        alt=${this.alt ?? this.formatLink()}
                        class="image"
                    />
                `}
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-link-card': LinkCard;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-link-card': LinkCard;
        }
    }
}
