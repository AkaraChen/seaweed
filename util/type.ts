import type {TupleToUnion} from 'type-fest';

export const sizeArray = ['small', 'normal', 'large'] as const;
export const typeArray = ['info', 'warning', 'error', 'success'] as const;
export const targetArray = ['_blank', '_parent', '_self', '_top'] as const;

export type size = TupleToUnion<typeof sizeArray>;
export type type = TupleToUnion<typeof typeArray>;
export type target = TupleToUnion<typeof targetArray>;
