import { NodeType, DoublyListType } from "./types/doublyLinkedListTypes";

class ListNode implements NodeType {
  data: string | number
  next: NodeType | null
  prev: NodeType | null
  constructor (data: string | number) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList implements DoublyListType {
  tail: NodeType | null
  head: NodeType | null
  length: number;
  constructor () {
    this.tail = null
    this.head = null
    this.length = 0
  }

  printList () {
    if(!this.head) return "[]"
    let result = "["

    let curr = this.head

    for (let i = 1; i < this.length; i++) {
      result += curr.data + ", "
      curr = curr.next!
    }

    result += curr.data + "]"

    return result
  }

  append (value: string | number) {
    const newNode = new ListNode(value)

    if(!this.tail) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }

    return this
  }

  appendLeft (value: string | number) {
    const newNode = new ListNode(value)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
      this.length++
    }

    return this
  }

  pop () {
    let poppedVal: string | number | undefined

    if (this.length === 1) {
      poppedVal = this.tail?.data
      this.length--
      this.tail = null
      this.head = null
    }

    if(this.tail) {
      poppedVal = this.tail.data
      this.tail = this.tail.prev
      this.tail!.next = null
      this.length--
    }

    return poppedVal
  }

  popLeft () {
    let poppedVal: string | number | undefined

    if(this.length === 1) {
      poppedVal = this.head?.data

      this.head = null
      this.tail = null
      this.length--
    }

    if(this.head) {
      poppedVal = this.head.data

      this.head = this.head.next
      this.head!.prev = null
      this.length--
    }

    return poppedVal
  }

  findByVal (value: string | number) {
    let curr: ListNode

    if(this.head) {
      curr = this.head
      for (let i = 0; i < this.length; i++) {
        if(curr.data === value) return i
        curr = curr.next!
      }
    }

    return undefined
  }

  getByIndex (index: number) {
    const length = this.length - 1
    if(length < index) return undefined
    let curr = this.head

    for (let i = 1; i < length; i++) {
      curr = curr!.next
    }

    return curr!.data
  }

  toArray () {
    const length = this.length
    const arr: any[] = []
    if (length < 1) return arr

    let curr = this.head

    for (let i = 0; i < length; i++) {
      arr.push(curr!.data)
      curr = curr!.next
    }

    return arr
  }

  fromArray (array: any[]) {
    if (array.length === 0) return
    let start = 0
    if(!this.tail) {
      const newNode = new ListNode(array[start])

      this.head = newNode
      this.tail = newNode
      this.length++
      start = 1
    }

    for (let i = start; i < array.length; i++) {
      const newNode = new ListNode(array[i])

      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }

    return this
  }

  reverse () {
  }
}
