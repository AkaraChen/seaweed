// @ts-check
import fg from 'fast-glob';

const allComponent = fg
    .sync('./packages/*', { onlyDirectories: true })
    .map(item => item.slice('./packages/'.length))
    .filter(item => !['shared'].includes(item));

export const generatedIndex = allComponent
    .map(
        packageName =>
            `export * from './packages/${packageName}/${packageName}';\n`
    )
    .join('');

export const packages = allComponent.map(
    item => `./packages/${item}/${item}.ts`
);
