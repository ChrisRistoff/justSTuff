import { LinkedList } from "../DS/linkedList";

describe('test the LinkedList data structure', () => {
  describe('test the printList method', () => {
    it('should returt () for an empty linked list', () => {
      const testList = new LinkedList()
      expect(testList.printList()).toBe("[]")
      expect(testList.head).toBeNull()
      expect(testList.tail).toBeNull()
    })
  })

  describe('test the append method', () => {
    it('should append an item to an empty list', () => {
      const test = new LinkedList()
      test.append("test")
      expect(test.printList()).toBe("[test]")
      expect(test.head?.data).toBe("test")
      expect(test.tail?.data).toBe("test")
      expect(test.tail?.next).toBeNull()
    })
    it('should append items to the end of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head?.data).toBe(1)
      expect(test.head?.next!.data).toBe(2)
      expect(test.tail?.data).toBe(3)
      expect(test.tail?.next).toBeNull()
    })
  })

  describe('test appendLeft method', () => {
    it('should append an item to an empty list', () => {
      const test = new LinkedList()
      test.appendLeft(1)
      expect(test.printList()).toBe("[1]")
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(1)
      expect(test.tail?.next).toBeNull()
    })
    it('should append items to the beginning of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[2, 3]")
      test.appendLeft(1)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head?.data).toBe(1)
      expect(test.tail?.next).toBeNull()
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
      expect(test.printList()).toBe("[1, 2]")
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
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
      expect(test.printList()).toBe("[2, 3]")
      expect(test.head?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(2)
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
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(2)
      expect(test.printList()).toBe("[1, 2]")
    })
    it('should return the index when it is found', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      expect(test.findByVal(2)).toEqual(1)
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.printList()).toBe("[1, 2]")
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
      expect(test.tail?.next).toBeNull()
    })
    it('shoulde return undefined when index is bigger than length', () => {
      const test = new LinkedList()
      test.append(1)
      expect(test.getByIndex(1)).toBe(undefined)
      expect(test.tail?.next).toBeNull()
    })
  })


})
