import '../alert';

test('render', () => {
    const element = document.createElement('sw-alert');
    expect(element.type).toBe('info');
});
