const LinkedList = require("../DS/linkedList")

describe('test the LinkedList data structure', () => {
  describe('test the printList method', () => {
    it('should returt () for an empty linked list', () => {
      const testList = new LinkedList()
      expect(testList.printList()).toBe("()")
      expect(testList.getLength()).toBe(0)
      expect(testList.head).toBeNull()
      expect(testList.tail).toBeNull()
    })
  })

  describe('test the append method', () => {
    it('should append an item to an empty list', () => {
      const test = new LinkedList()
      test.append("test")
      expect(test.printList()).toBe("(test)")
      expect(test.head.data).toBe("test")
      expect(test.tail.data).toBe("test")
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(1)
    })
    it('should append items to the end of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("(1, 2, 3)")
      expect(test.head.data).toBe(1)
      expect(test.head.next.data).toBe(2)
      expect(test.tail.data).toBe(3)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(3)
    })
  })

  describe('test appendLeft method', () => {
    it('should append an item to an empty list', () => {
      const test = new LinkedList()
      test.appendLeft(1)
      expect(test.printList()).toBe("(1)")
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(1)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(1)
    })
    it('should append items to the beginning of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("(2, 3)")
      test.appendLeft(1)
      expect(test.printList()).toBe("(1, 2, 3)")
      expect(test.head.data).toBe(1)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(3)
    })
  })

  describe('test pop method', () => {
    it('should remove the last item from the list and return it', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      const popped = test.pop()
      expect(popped).toBe(3)
      expect(test.printList()).toBe("(1, 2)")
      expect(test.tail.data).toBe(2)
      expect(test.tail.next).toBeNull()
    })
  })

  describe('test popLeft method', () => {
    it('should remove first item of the list and return it', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      const poppedLeft = test.popLeft()
      expect(poppedLeft).toBe(1)
      expect(test.printList()).toBe("(2, 3)")
      expect(test.head.data).toBe(2)
      expect(test.tail.next).toBeNull()
    })
  })

  describe('test getByIndex method', () => {
    it('should returned undefined when the list is empty', () => {
      const test = new LinkedList()
      expect(test.getByIndex(1)).toBe(undefined)
    })
    it('should return the value when index is given', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.getByIndex(1)).toBe(2)
      expect(test.tail.next).toBeNull()
    })
    it('shoulde return undefined when index is bigger than length', () => {
      const test = new LinkedList()
      test.append(1)
      expect(test.getByIndex(1)).toBe(undefined)
      expect(test.tail.next).toBeNull()
    })
  })

  describe('test findByVal method', () => {
    it('should return undefined when list is empty', () => {
      const test = new LinkedList()
      expect(test.findByVal(2)).toBe(undefined)
    })
    it('should return undefined when value is not in the list', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      expect(test.findByVal(3)).toBe(undefined)
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(2)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(2)
      expect(test.printList()).toBe("(1, 2)")

    })
    it('should return the value and its index in an array when it is found', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      expect(test.findByVal(2)).toEqual([2, 1])
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(2)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(2)
      expect(test.printList()).toBe("(1, 2)")
    })
  })

  describe('test toArray method', () => {
    it('should return an empty array if list is empty', () => {
      const test = new LinkedList()
      expect(test.toArray()).toEqual([])
    })
    it('should return an array of the whole list when no arguments are given', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      expect(test.toArray()).toEqual([1,2])
      expect(test.getLength()).toBe(2)
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(2)
      expect(test.tail.next).toBeNull()
      expect(test.printList()).toBe("(1, 2)")
    })
    it('should return an array from start to end index when args are given', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      test.append(4)
      test.append(5)
      expect(test.toArray(1,3)).toEqual([2,3,4])
      expect(test.getLength()).toBe(5)
      expect(test.printList()).toBe("(1, 2, 3, 4, 5)")
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(5)
      expect(test.tail.next).toBeNull()
    })
  })

  describe('test fromArray method', () => {
    it('should return an empty linked list if given an empty array', () => {
      const test = new LinkedList()
      const arr = []
      test.fromArray(arr)
      expect(test.printList()).toBe("()")
      expect(test.getLength()).toBe(0)
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })
    it('should add items from an array to a linked list similar to append', () => {
      const test = new LinkedList()
      const arr = [1,2,3,4]
      test.fromArray(arr)
      expect(test.printList()).toBe("(1, 2, 3, 4)")
      expect(test.head.data).toBe(1)
      expect(test.tail.data).toBe(4)
      expect(test.tail.next).toBeNull()
      expect(test.getLength()).toBe(4)
    })
  })
})
