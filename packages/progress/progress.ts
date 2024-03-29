/* eslint-disable no-mixed-operators */
import clsx from 'clsx';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Reactify, size, sizeArray, type, typeArray } from 'shared/type';
import { styles } from './progress.less';

@customElement('sw-progress')
export class Progress extends LitElement {
    static override styles = styles;

    @property({ type: Number })
    value = 50;

    @property({ type: Number })
    max = 100;

    @property()
    size: size = 'normal';

    @property()
    type: type = 'info';

    @property()
    color: string;

    clsx = () =>
        clsx(
            { [`${this.type}`]: typeArray.includes(this.type) },
            { [`${this.size}`]: sizeArray.includes(this.size) }
        );

    override render() {
        const style = {
            width: `${(this.value / this.max) * 100}%`,
            'background-color': this.color
        };
        return html`
            <div class=${this.clsx()}>
                <span style=${styleMap(style)}></span>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-progress': Progress;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-progress': Reactify<Progress>;
        }
    }
}
