import { newSet } from "../DS/newSet"

describe('test newSet', () => {

  describe('test add method', () => {
    it('should add items to a set', () => {
      const set = new newSet()
      set.add("item")
      set.add("item2")
      expect(set.printSet()).toBe("Set(2) {item2, item}")
    })
    it('should add items to a set if they are not already in the set', () => {
      const set = new newSet()
      set.add("item")
      set.add("item2")
      set.add("item")
      expect(set.printSet()).toBe("Set(2) {item2, item}")
    })
  })

  describe('test the has method', () => {
    it('should return true if item is in the set', () => {
      const set = new newSet()
      set.add("item")
      expect(set.has("item")).toBe(true)
    })
    it('should return false if the set does not have the item', () => {
      const set = new newSet()
      set.add("whatever")
      expect(set.has("item")).toBe(false)
    })
  })

  describe('test the del method', () => {
    it('should delete the item in the set', () => {
      const set = new newSet()
      set.add("item")
      expect(set.printSet()).toBe("Set(1) {item}")
      set.delete("item")
      expect(set.printSet()).toBe("Set(0) {}")
    })
  })

  describe('test union', () => {
    it('should create a set if given an array as an argument', () => {
      const set = new newSet([1,2,3,4,4,3,2,1])
      expect(set.printSet()).toBe("Set(4) {2, 3, 4, 1}")
    })
    it('should create a set if given multiple arrays', () => {
      const arr1 = [1,2,3]
      const arr2 = [2,3,4,1]
      const set = new newSet(...arr1, ...arr2)
      expect(set.printSet()).toBe("Set(4) {2, 3, 4, 1}")
    })
  })

  describe('test toArray', () => {
    it('should return an array from items in the set', () => {
      const set = new newSet([1,2,3,4])
      expect(set.toArray()).toEqual([2,3,4, 1])
    })
  })

  describe('test resize method', () => {
    it('should resize the map when given more than 10 items', () => {
      const set = new newSet("abcdefghijklmnop")
      expect(set.printSet()).toBe("Set(16) {d, e, f, g, h, i, j, k, l, m, n, o, p, a, b, c}")
      expect(set.size).toBe(16)
      expect(set.maxSize).toBe(20)
    })
  })

})
