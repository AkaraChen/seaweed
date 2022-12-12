import type {Form} from '../form/form';

export const getFormSize = (element: Element) => {
    const form: Form | null = element.closest('sw-form');
    if (form) return form.size;
};
