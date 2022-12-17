import {getSize, isValidColor} from '../style';

test('getSize', () => {
    expect(getSize(20)).toBe('20px');
    expect(getSize('20px')).toBe('20px');
    expect(getSize('10vh')).toBe('10vh');
    expect(getSize('adada')).toBe('');
});

test('isValidColor', () => {
    expect(isValidColor('red')).toBeTruthy();
    expect(isValidColor('#888')).toBeTruthy();
    expect(isValidColor('#vvv')).toBeFalsy();
    expect(isValidColor('#888888')).toBeTruthy();
});
