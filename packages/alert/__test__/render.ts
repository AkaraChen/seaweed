import { Alert } from '../alert';
import { fixture } from '@open-wc/testing';
import { render } from 'shared/test';

test('should render success', async () => {
    render('sw-alert', Alert);
});

test('different type, different class', async () => {
    const info = (await fixture('<sw-alert></sw-alert>')) as Alert;
    const warn = (await fixture('<sw-alert type="warn"></sw-alert>')) as Alert;
    expect(info.shadowRoot).not.toBeNull();
    expect(info.shadowRoot.querySelector('.alert')).not.toBeNull();
    expect(info.shadowRoot.querySelector('.alert').className).not.toBe(
        warn.shadowRoot.querySelector('.alert').className
    );
});
