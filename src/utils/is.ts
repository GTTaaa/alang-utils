// src/utils/is.ts
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'