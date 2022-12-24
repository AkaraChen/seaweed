import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sw-balancer')
export class Balancer extends LitElement {
    static override styles = css`
        :host {
            display: inline-block;
            vertical-align: top;
            text-decoration: inherit;
        }
        .wrapper {
            display: inline-block;
        }

        p {
            margin: 0;
        }
    `;

    @property({ type: Number })
    ratio = 1;

    private relayout(ratio: number) {
        const wrapper = this.shadowRoot.querySelector(
            '.wrapper'
        ) as HTMLElement;
        const container = wrapper.parentElement;
        const update = (width: number) => {
            wrapper.style.maxWidth = width + 'px';
        };
        wrapper.style.maxWidth = '';
        const w = container.clientWidth;
        const h = container.clientHeight;
        let l = w / 2;
        let r = w;
        let m: number;
        if (w) {
            while (l + 1 < r) {
                m = Math.trunc((l + r) / 2);
                update(m);
                if (container.clientHeight === h) {
                    r = m;
                } else {
                    l = m;
                }
            }
            update(r * ratio + w * (1 - ratio));
        }
    }

    override connectedCallback(): void {
        super.connectedCallback();
        setTimeout(() => {
            this.relayout(this.ratio);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        return html`<p>
            <span class="wrapper" @resize=${this.relayout}><slot></slot></span>
        </p> `;
    }
}
