import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from '#/linkcard.less';

export interface LinkCardProperty {
    title: string;
    link: string;
    image?: string;
    target?: string;
    alt?: string;
}

@customElement('sw-link-card')
export class LinkCard extends LitElement {
    static styles = [styles];

    @property()
    title: string;

    @property()
    link: string;

    @property()
    image: string;

    @property()
    target: '_blank' | '_parent' | '_self' | '_top' = '_blank';

    @property()
    alt: string;

    formatLink = () => {
        try {
            return new URL(this.link).origin;
        } catch {
            return this.link;
        }
    };

    formatImage = () => {
        if (this.image) {
            return html`
                <img
                    src=${this.image}
                    height="55"
                    width="55"
                    alt=${this.alt ?? this.formatLink()}
                    class="image"
                />
            `;
        }
    };

    render() {
        return html`
            <a class="container" href="${this.link}" target="${this.target}">
                <div class="head">
                    <h2 class="title">${this.title}</h2>
                    <p class="link">${this.formatLink()}</p>
                </div>
                ${this.formatImage()}
            </a>
        `;
    }
}
