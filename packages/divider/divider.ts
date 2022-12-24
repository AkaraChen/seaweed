import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './divider.less';
import clsx from 'clsx';
import { postionArray, position, Reactify } from 'shared/type';

@customElement('sw-divider')
export class Divider extends LitElement {
    static override styles = styles;

    @property()
    text: string = '';

    @property()
    position: position = 'medium';

    @property({ type: Boolean })
    vertical: boolean;

    @property({ type: Boolean })
    dashed: boolean;

    @property({ type: Boolean })
    dotted: boolean;

    @property({ type: Boolean })
    slash: boolean;

    clsx = () =>
        clsx(
            'divider',
            {
                [`position-${this.position}`]: postionArray.includes(
                    this.position
                )
            },
            { vertical: this.vertical || this.slash },
            { dashed: this.dashed },
            { dotted: this.dotted },
            { empty: this.text.length === 0 },
            { slash: this.slash }
        );

    override render() {
        return html`
            <div class=${this.clsx()}>
                <div class="left-box"></div>
                <div class="center-box">${this.text}</div>
                <div class="right-box"></div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-divider': Divider;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-divider': Reactify<Divider>;
        }
    }
}
