import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../alert';

export default {
    title: 'Alert',
    args: {
        type: 'info',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        title: '',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'error', 'warning', 'success'],
        },
    },
} as Meta;

export const Normal = ({ type, text, title }) =>
    html`<sw-alert type="${type}" title="${title}">${text}</sw-alert> `;

export const Fill = ({ type, text, title }) =>
    html`<sw-alert type="${type}" title="${title}" fill>${text}</sw-alert> `;

export const Border = ({ type, text, title }) =>
    html`
        <sw-alert type="${type}" title="${title}" border="top"
            >${text}</sw-alert
        >
        <sw-alert type="${type}" title="${title}" border="left"
            >${text}</sw-alert
        >
    `;
