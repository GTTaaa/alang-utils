/**
 * 判断某个值是否为指定类型
 * @param val 需要判断的值
 * @param type 需要判断的类型
 * @returns boolean 如果值为该类型返回 true，否则返回 false
 */
// export function is(val: unknown, type: string): boolean {
//   return Object.prototype.toString.call(val).slice(8, -1).toLowerCase() === type.toLowerCase()
// }
export function is(val: unknown, type: string): boolean {
  return Object.prototype.toString.call(val).toLowerCase() === `[object ${type}]`.toLowerCase()
}

export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isFunction = (val: unknown): val is CallableFunction => typeof val === 'function'
export const isObject = (val: unknown): val is Record<PropertyKey, unknown> => val !== null && typeof val === 'object'
export const isArray = Array.isArray
export const isDate = (val: unknown): val is Date => val instanceof Date
export const isEmpty = (val: unknown): boolean => {
  if (val === null || val === undefined) return true
  if (isArray(val) || isString(val)) return val.length === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
}