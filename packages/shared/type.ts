import type { TupleToUnion } from 'type-fest';
import type React from 'react';

export const sizeArray = ['small', 'normal', 'large'] as const;
export const typeArray = ['info', 'warning', 'error', 'success'] as const;
export const targetArray = ['_blank', '_parent', '_self', '_top'] as const;
export const postionArray = ['left', 'medium', 'right'] as const;

export type size = TupleToUnion<typeof sizeArray>;
export type type = TupleToUnion<typeof typeArray>;
export type target = TupleToUnion<typeof targetArray>;
export type position = TupleToUnion<typeof postionArray>;

export type Reactify<T, K = HTMLDivElement> = Partial<T> &
    React.DetailedHTMLProps<React.HTMLAttributes<K>, K>;
