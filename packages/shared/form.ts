import type {Form} from '../form/form';

export const getFormSize = (element: Element) => {
    // @ts-ignore
    const form: Form | null = element.closest('sw-form');
    if (form !== null) return form.size;
};
