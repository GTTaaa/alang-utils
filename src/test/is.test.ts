import { describe, expect, it } from 'vitest'
import { isString, isNumber, isObject, isEmpty, isArray, is } from '../utils/is/is'

describe('is utils', () => {
  describe('is', () => {
    it('应该正确判断各种类型', () => {
      // 字符串类型判断
      expect(is('hello', 'string')).toBe(true)
      expect(is(123, 'string')).toBe(false)

      // 数字类型判断
      expect(is(123, 'number')).toBe(true)
      expect(is('123', 'number')).toBe(false)

      // 对象类型判断
      expect(is({}, 'object')).toBe(true)
      expect(is([], 'object')).toBe(false)

      // 数组类型判断
      expect(is([], 'array')).toBe(true)
      expect(is({}, 'array')).toBe(false)
    })
  })
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('')).toBe(true)
      expect(isString('test')).toBe(true)
    })

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false)
      expect(isString({})).toBe(false)
      expect(isString(null)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
    })

    it('should return false for non-empty values', () => {
      expect(isEmpty('test')).toBe(false)
      expect(isEmpty([1, 2])).toBe(false)
      expect(isEmpty({ a: 1 })).toBe(false)
    })
  })
})