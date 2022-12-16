const validUnits = ['px', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax'];

export const getSize = (size: string | number) => {
    if (!size) return '';
    if (typeof size === 'number' || !Number.isNaN(Number(size)))
        return `${size}px`;
    for (const validUnit of validUnits) {
        if ((size as string).endsWith(validUnit)) return size;
    }
    return '';
};
