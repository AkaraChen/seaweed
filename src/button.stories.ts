import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './button';

export default {
    title: 'Button',
} as Meta;

const Template = () => html`
    <sw-button>Button</sw-button>
    <sw-button type="blue">Danger</sw-button>
`;

export const Index = Template;
