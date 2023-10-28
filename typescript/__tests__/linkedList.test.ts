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
      expect(test.head!.data).toBe("test")
      expect(test.tail!.data).toBe("test")
      expect(test.tail!.next).toBeNull()
    })
    it('should append items to the end of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head!.data).toBe(1)
      expect(test.head!.next!.data).toBe(2)
      expect(test.tail!.data).toBe(3)
      expect(test.tail!.next).toBeNull()
    })
  })

  describe('test appendLeft method', () => {
    it('should append an item to an empty list', () => {
      const test = new LinkedList()
      test.appendLeft(1)
      expect(test.printList()).toBe("[1]")
      expect(test.head!.data).toBe(1)
      expect(test.tail!.data).toBe(1)
      expect(test.tail!.next).toBeNull()
    })
    it('should append items to the beginning of the list when it is not empty', () => {
      const test = new LinkedList()
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[2, 3]")
      test.appendLeft(1)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head!.data).toBe(1)
      expect(test.tail!.next).toBeNull()
    })
  })

})
