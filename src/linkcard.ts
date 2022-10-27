import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface LinkCardProp {
    title: string;
    link: string;
    image?: string;
    target?: string;
    alt?: string;
}

@customElement('sw-link-card')
export class LinkCard extends LitElement {
    static styles = css`
        .container {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
                segoe ui emoji, Segoe UI Symbol, noto color emoji;
            box-sizing: border-box;
            display: flex;
            background-color: rgb(247, 247, 247);
            width: 275px;
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
            border-radius: 4px;
        }
        @media (prefers-color-scheme: dark) {
            .container {
                background-color: #222;
            }
            .title {
                color: #bbb;
            }
            .image {
                filter: brightness(0.9);
            }
        }
        .primary {
            background-color: var(--blue);
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
                class="image"
            />`;
        }
    };

    render() {
        return html`<a
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
