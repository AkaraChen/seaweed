export const list = [
    'alert',
    'badge',
    'button',
    'checkbox',
    'link-card',
    'loading',
    'progress',
    'link'
].map(item => `sw-${item}`);

export const formatTag = (tag: string) => `<${tag}></${tag}>`;
