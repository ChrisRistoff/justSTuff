import { DoublyLinkedList } from "../DS/doublyLinkedList"

describe('test the LinkedList data structure', () => {

  describe('test the printList method', () => {

    it('should returt () for an empty linked list', () => {
      const testList = new DoublyLinkedList()
      expect(testList.printList()).toBe("[]")
      expect(testList.length).toBe(0)
      expect(testList.head).toBeNull()
      expect(testList.tail).toBeNull()
    })
  })

  describe('test the append method', () => {

    it('should append an item to an empty list', () => {
      const test = new DoublyLinkedList()
      test.append("test")
      expect(test.printList()).toBe("[test]")
      expect(test.head!.data).toBe("test")
      expect(test.tail!.data).toBe("test")
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(1)
    })

    it('should append items to the end of the list when it is not empty', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head!.data).toBe(1)
      expect(test.head!.next!.data).toBe(2)
      expect(test.tail!.data).toBe(3)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(3)
    })
  })

  describe('test appendLeft method', () => {
    it('should append an item to an empty list', () => {
      const test = new DoublyLinkedList()
      test.appendLeft(1)
      expect(test.printList()).toBe("[1]")
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(1)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(1)

    })
    it('should append items to the beginning of the list when it is not empty', () => {
      const test = new DoublyLinkedList()
      test.append(2)
      test.append(3)
      expect(test.printList()).toBe("[2, 3]")
      test.appendLeft(1)
      expect(test.printList()).toBe("[1, 2, 3]")
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(3)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(3)
    })
  })


  describe('test pop method', () => {

    it('should return undefined when popping an empty list', () => {
      const test = new DoublyLinkedList()
      const popped = test.pop()
      expect(popped).toBe(undefined)
      expect(test.printList()).toBe("[]")
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })

    it('should remove the last item from the list and return it', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      const popped = test.pop()
      expect(popped).toBe(3)
      expect(test.printList()).toBe("[1, 2]")
      expect(test.tail!.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.tail!.prev!.data).toBe(1)
      expect(test.head!.next!.data).toBe(2)
    })

    it('should work for a list with a signle item', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      const popped = test.pop()
      expect(popped).toBe(1)
      expect(test.printList()).toBe("[]")
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })
  })

  describe('test popLeft method', () => {

    it('should return undefined for an empty list', () => {
      const test = new DoublyLinkedList()
      const popped = test.popLeft()
      expect(popped).toBe(undefined)
      expect(test.printList()).toBe("[]")
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })

    it('should remove first item of the list and return it', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      const poppedLeft = test.popLeft()
      expect(poppedLeft).toBe(1)
      expect(test.printList()).toBe("[2, 3]")
      expect(test.head?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
    })

    it('should work for a list with a signle item', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      const popped = test.popLeft()
      expect(popped).toBe(1)
      expect(test.printList()).toBe("[]")
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })
  })


  describe('test getByIndex method', () => {
    it('should returned undefined when the list is empty', () => {
      const test = new DoublyLinkedList()
      expect(test.getByIndex(1)).toBe(undefined)
    })
    it('should return the value when index is given', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      test.append(3)
      expect(test.getByIndex(1)).toBe(2)
      expect(test.tail?.next).toBeNull()
    })
    it('shoulde return undefined when index is bigger than length', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      expect(test.getByIndex(1)).toBe(undefined)
      expect(test.tail?.next).toBeNull()
    })
  })


  describe('test findByVal method', () => {
    it('should return undefined when list is empty', () => {
      const test = new DoublyLinkedList()
      expect(test.findByVal(2)).toBe(undefined)
    })
    it('should return undefined when value is not in the list', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      expect(test.findByVal(3)).toBe(undefined)
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(2)
      expect(test.printList()).toBe("[1, 2]")

    })
    it('should return the index when the value is found', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      expect(test.findByVal(2)).toEqual(1)
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.length).toBe(2)
      expect(test.printList()).toBe("[1, 2]")
    })
  })


  describe('test toArray method', () => {
    it('should return an empty array if list is empty', () => {
      const test = new DoublyLinkedList()
      expect(test.toArray()).toEqual([])
    })
    it('should return an array of the whole list when no arguments are given', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      expect(test.toArray()).toEqual([1,2])
      expect(test.length).toBe(2)
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.printList()).toBe("[1, 2]")
    })
  })


  describe('test toArrayReverse method', () => {
    it('should return an empty array if list is empty', () => {
      const test = new DoublyLinkedList()
      expect(test.toArrayReverse()).toEqual([])
    })
    it('should return an array of the whole list when no arguments are given', () => {
      const test = new DoublyLinkedList()
      test.append(1)
      test.append(2)
      expect(test.toArrayReverse()).toEqual([2,1])
      expect(test.length).toBe(2)
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(2)
      expect(test.tail?.next).toBeNull()
      expect(test.printList()).toBe("[1, 2]")
    })
  })

  describe('test fromArray method', () => {
    it('should return an empty linked list if given an empty array', () => {
      const test = new DoublyLinkedList()
      const arr: never[] = []
      test.fromArray(arr)
      expect(test.printList()).toBe("[]")
      expect(test.head).toBeNull()
      expect(test.tail).toBeNull()
    })
    it('should add items from an array to a linked list similar to append', () => {
      const test = new DoublyLinkedList()
      const arr = [1,2,3,4]
      test.fromArray(arr)
      expect(test.printList()).toBe("[1, 2, 3, 4]")
      expect(test.head?.data).toBe(1)
      expect(test.tail?.data).toBe(4)
      expect(test.tail?.next).toBeNull()
    })
  })

})
