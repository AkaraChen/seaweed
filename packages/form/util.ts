import type { Form } from './form';

export const getFormSize = (element: Element) => {
    const form: Form | null = element.closest('sw-form');
    if (form) return form.size;
};
