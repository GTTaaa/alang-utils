interface StorageOptions {
  prefix?: string
  expire?: number // 过期时间（毫秒）
}

export class Storage {
  private prefix: string
  
  constructor(options: StorageOptions = {}) {
    this.prefix = options.prefix || ''
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`
  }

  set(key: string, value: unknown, expire?: number): void {
    const data = {
      value,
      expire: expire ? Date.now() + expire : null
    }
    localStorage.setItem(this.getKey(key), JSON.stringify(data))
  }

  get<T>(key: string): T | null {
    const data = localStorage.getItem(this.getKey(key))
    if (!data) return null

    try {
      const { value, expire } = JSON.parse(data)
      if (expire && Date.now() > expire) {
        this.remove(key)
        return null
      }
      return value as T
    } catch {
      return null
    }
  }

  remove(key: string): void {
    localStorage.removeItem(this.getKey(key))
  }

  clear(): void {
    localStorage.clear()
  }
}