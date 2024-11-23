// src/utils/storage.ts
export class Storage {
  static set(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('Storage set error:', e)
    }
  }

  static get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.error('Storage get error:', e)
      return null
    }
  }
}