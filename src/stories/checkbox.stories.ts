import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../checkbox';

export default {
    title: 'Checkbox',
    args: {
        size: 'normal',
        label: 'Label',
        checked: true,
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'normal', 'large'],
        },
    },
} as Meta;

export const Normal = ({ size, label, checked }) => html`
    <sw-checkbox
        size=${size}
        ?checked=${checked}
        label="${label}"
    ></sw-checkbox>
    <sw-checkbox
        size=${size}
        ?checked=${checked}
        label=${label}
        disabled
    ></sw-checkbox>
`;
