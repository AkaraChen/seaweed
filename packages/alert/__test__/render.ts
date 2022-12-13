import {Alert} from '../alert';
import {fixture} from '@open-wc/testing';

test('should render success', async () => {
    const element = await fixture('<sw-alert></sw-alert>') as Alert;
    expect(element.shadowRoot).not.toBe(null);
    expect(element instanceof Alert).toBeTruthy();
    expect(element.type).toBe('info');
    expect(
        element.shadowRoot.querySelector('.alert').className.includes('info')
    ).toBeTruthy();
});
