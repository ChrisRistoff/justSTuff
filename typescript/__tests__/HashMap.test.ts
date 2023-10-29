import { HashMap } from "../DS/hashMap"

describe('test hashMap', () => {

  describe('test properties', () => {
    it('bucket should be an array', async () => {
      const map = new HashMap()
      expect(Array.isArray(map.bucket)).toBe(true)
    })
    it('should update the maxSize', () => {
      const map = new HashMap(21)
      expect(map.maxSize).toBe(21)
      const map2 = new HashMap()
      expect(map2.maxSize).toBe(100)
    })
  })

  describe('test methods', () => {

    describe('set and get', () => {
      it('should set and get keys and values', () => {
        const map = new HashMap()
        map.set("whatever", "value1")
        map.set("whatever2", "value2")
        expect(map.get("whatever")).toBe("value1")
        expect(map.get("whatever2")).toBe("value2")
      })
    })

    describe('test delete', () => {
      it('should delete a pair', () => {
        const map = new HashMap()
        map.set("whatever", "val1")
        expect(map.get("whatever")).toBe("val1")
        map.delete("whatever")
        expect(map.get("whatever")).toBe(undefined)
      })
    })

    describe('test clear', () => {
      it('should clear the hashMap of entries', () => {
        const map = new HashMap()
        map.set(1, 5)
        map.set(2, 10)
        expect(map.get(1)).toBe(5)
        expect(map.get(2)).toBe(10)
        map.clear()
        expect(map.get(1)).toBe(undefined)
        expect(map.get(2)).toBe(undefined)
      })
    })

    describe('test has', () => {
      it('should return false if map does not have key and true if it does', () => {
        const map = new HashMap()
        map.set(1,5)
        map.set(2,6)
        expect(map.has(1)).toBe(true)
        expect(map.has(2)).toBe(true)
        expect(map.has(3)).toBe(false)
      })
    })

    describe('forEach method', () => {
      it('should iterate through map keys and vals and accept a function as an argument', () => {
        const arr: any[] = []
        const arr2: any[] = []
        const fun = (key: string, val: any) => arr.push(key)
        const fun2 = (key: string, val: any) => arr2.push(val)

        const map = new HashMap()
        map.set(1,2)
        map.set(3,4)
        map.forEach(fun)
        map.forEach(fun2)

        expect(arr).toEqual([1,3])
        expect(arr2).toEqual([2,4])
      })
    })

    describe('entries method', () => {
      it('should return an array of key and value pairs', () => {
        const map = new HashMap()
        map.set(1,2)
        map.set(3,4)

        const entries = map.entries()
        expect(entries).toEqual([[1,2], [3,4]])
      })
    })

    describe('test keys method', () => {
      it('should return an array of keys', () => {
        const map = new HashMap()
        map.set(1,2)
        map.set(3,4)
        const keys = map.keys()
        expect(keys).toEqual([1,3])
      })
    })

    describe('test values method', () => {
      it('should return an array of values', () => {
        const map = new HashMap()
        map.set(1,2)
        map.set(2,3)
        const values = map.values()
        expect(values).toEqual([2,3])
      })
    })

    describe('test size method', () => {
      it('should return the size of the map', () => {
        const map = new HashMap()
        map.set(1,2)
        map.set(2,3)
        expect(map.size).toBe(2)
        map.delete(1)
        expect(map.size).toBe(1)
      })
    })
  })
})
