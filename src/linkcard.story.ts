import { html } from 'lit-html';
import './linkcard';

export default {
    title: 'LinkCard',
};

const Template = (args) =>
    html`<sw-link-card
        title="${args.title}"
        link="${args.link}"
        image="${args.image}"
        alt="${args.alt}"
    />`;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Ringo.js',
    link: 'https://github.com/akarachen/ringo',
    image: 'https://via.placeholder.com/55',
    alt: 'image alt',
};
