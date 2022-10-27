import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './button';

export default {
    title: 'Button',
    args: {
        type: 'info',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'error', 'warning', 'success'],
        },
    },
} as Meta;

export const Normal = ({ type }) => html`
    <sw-button type="${type}">Button</sw-button>
    <sw-button type="${type}" primary>Primary</sw-button>
`;

export const Large = ({ type }) => html`
    <sw-button type="${type}" size="large">Large Button</sw-button>
    <sw-button type="${type}" size="large" primary>Primary</sw-button>
`;

export const Small = ({ type }) => html`
    <sw-button type="${type}" size="small">Small</sw-button>
    <sw-button type="${type}" size="small" primary>Primary</sw-button>
`;
