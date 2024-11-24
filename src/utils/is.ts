export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'
export const isArray = Array.isArray
export const isDate = (val: unknown): val is Date => val instanceof Date
export const isEmpty = (val: unknown): boolean => {
  if (val === null || val === undefined) return true
  if (isArray(val) || isString(val)) return (val as any).length === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
}