import { describe, expect, it, beforeEach } from 'vitest'
import { Storage } from '../utils/storage/storage'

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