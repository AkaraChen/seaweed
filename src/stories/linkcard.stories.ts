import { html } from 'lit-html';
import '../linkcard';
import { LinkCardProp } from '../linkcard';
import { Meta } from '@storybook/web-components';

export default {
    title: 'LinkCard',
    args: {
        title: 'Example',
        link: 'https://example.com',
        image: 'https://via.placeholder.com/55',
        alt: 'image alt',
    } as LinkCardProp,
} as Meta;

const Template = ({ title, link, image, alt }: LinkCardProp) =>
    html`<sw-link-card
        title="${title}"
        link="${link}"
        image="${image}"
        alt="${alt}"
    />`;

export const Index = Template;
