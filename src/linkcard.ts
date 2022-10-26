import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sw-link-card')
export class LinkCard extends LitElement {
    static styles = css`
        .container {
            display: inline-flex;
            background-color: rgb(247, 247, 247);
            width: 300px;
            border-radius: 8px;
            padding: 1em;
            text-decoration: none;
            color: black;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }
        .title {
            margin: 0;
            font-size: 17px;
            font-weight: 500;
        }
        .link {
            margin: 0;
            margin-top: 0.25em;
            font-size: 16px;
            color: gray;
        }
        .image {
            width: 55px;
            height: 55px;
        }
        @media (prefers-color-scheme: dark) {
            .container {
                background-color: #222;
            }
            .title {
                color: #bbb;
            }
        }
    `;

    @property()
    title: string;

    @property()
    link: string;

    @property()
    image: string;

    @property()
    target = '_blank';

    @property()
    alt: string;

    formatLink = () => new URL(this.link).origin;

    formatImage = () => {
        if (this.image) {
            return html`<img
                src="${this.image}"
                height="55"
                width="55"
                alt="${this.alt ? this.alt : this.formatLink()}"
            />`;
        }
    };

    render() {
        return html` <a
            class="container"
            href="${this.link}"
            target="${this.target}"
        >
            <div class="head">
                <h2 class="title">${this.title}</h2>
                <p class="link">${this.formatLink()}</p>
            </div>
            ${this.formatImage()}
        </a>`;
    }
}
