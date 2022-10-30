export const list = [
    'alert',
    'badge',
    'button',
    'checkbox',
    'link-card',
    'loading',
].map((item) => 'sw-' + item);

export const formatTag = (tag: string) => `<${tag}></${tag}>`;
