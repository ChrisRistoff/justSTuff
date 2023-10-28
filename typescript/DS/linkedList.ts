import { NodeType, ListType } from "./types/linkedListTypes"

export class ListNode implements NodeType{
  data
  next: ListNode | null
  constructor (data: string | number) {
    this.data = data
    this.next = null
  }
}


export class LinkedList implements ListType {
  head: NodeType | null
  tail: NodeType | null
  length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  printList () {
    let curr = this.head
    let result = "["

    while (curr) {
      if (curr.next) {
        result += curr.data + ", "
      } else {
        result += curr.data
      }
      curr = curr.next
    }

    result += "]"

    return result
  }

  append (data: string | number) {
    const newNode = new ListNode(data)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }

    return this
  }

  appendLeft (data: string | number) {
    const newNode = new ListNode(data)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }

    return this;
  }

  pop() {
    if(this.tail) {
      const poppedVal = this.tail.data
      let curr = this.head
      this.length--

      for (let i = 1; i < this.length; i++) {
        curr = curr!.next
      }

      curr!.next = null
      this.tail = curr

      return poppedVal
    }

    return undefined;
  }

  popLeft() {
    if (this.head) {
      const poppedVal = this.head.data

      this.head = this.head.next
      this.length--

      return poppedVal
    }

    return undefined;
  }

  findByVal (value: string | number) {
    if (this.head) {
      let curr = this.head
      let index = 0

      while (curr) {
        if (curr.data === value) return index
        index++
        curr = curr.next!
      }
    }

    return undefined
  }

  getByIndex(index: number) {
    if(!this.head) return undefined;

    let curr = this.head

    for (let i = 0; i < index; i++) {
      curr = curr.next!
    }

    if(curr) return curr.data;
    return undefined;
  }

  toArray() {
    const arr = []

    let curr = this.head

    while(curr) {
      arr.push(curr?.data)
      curr = curr.next
    }

    return arr;
  }

  fromArray (array: number[] | string[] | never[]) {
    if (!array.length) return array
    let start = 0
    if(!this.tail) {
      const newNode = new ListNode(array[start])

      this.head = newNode
      this.tail = newNode
      this.length++
      start++
    }
    for(let i = start; i < array.length; i++) {
      const newNode = new ListNode(array[i])

      this.tail!.next = newNode
      this.tail = newNode
      this.length++
    }

    return array;
  }
}
