import { describe, expect, it, beforeEach, vi } from 'vitest'
import { Storage } from '../utils/storage/storage'

// // 模拟 localStorage
// const localStorageMock = (() => {
//   let store: Record<string, string> = {}
//   return {
//     getItem: vi.fn((key: string) => store[key] || null),
//     setItem: vi.fn((key: string, value: string) => {
//       store[key] = value.toString()
//     }),
//     removeItem: vi.fn((key: string) => {
//       delete store[key]
//     }),
//     clear: vi.fn(() => {
//       store = {}
//     })
//   }
// })()

// // 全局设置 localStorage
// vi.stubGlobal('localStorage', localStorageMock)

describe('Storage', () => {
  let storage: Storage

  beforeEach(() => {
    // 每个测试前清理 localStorage
    localStorage.clear()
    storage = new Storage({ prefix: 'test_' })
  })

  it('should store and retrieve values', () => {
    storage.set('key', 'value')
    expect(storage.get('key')).toBe('value')
  })

  it('should handle prefix correctly', () => {
    storage.set('key', 'value')
    expect(localStorage.getItem('test_key')).toBeTruthy()
  })

  it('should handle complex data types', () => {
    const testData = { name: 'test', arr: [1, 2, 3] }
    storage.set('complex', testData)
    expect(storage.get('complex')).toEqual(testData)
  })

  it('should return null for non-existent keys', () => {
    expect(storage.get('nonexistent')).toBeNull()
  })

  it('should remove items correctly', () => {
    storage.set('key', 'value')
    storage.remove('key')
    expect(storage.get('key')).toBeNull()
  })
})