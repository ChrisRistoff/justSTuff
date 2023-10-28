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
    const poppedVal = this.tail?.data
    let curr = this.head
    this.length--

    for (let i = 1; i < this.length; i++) {
      curr = curr!.next
    }

    curr!.next = null
    this.tail = curr

    return poppedVal
  }

  popLeft() {}

  findByVal () {}

  getByIndex() {}

  toArray() {}

  fromArray() {}
}

/*
const list = new LinkedList()
list.append("item1")
list.append("item2")
list.append("itemtopop")

console.log(list.printList());
console.log(list.pop());
console.log(list.printList());
*/
