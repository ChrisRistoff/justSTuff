class Node {
  constructor (data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}


class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  printList () {
    let curr = this.head
    let list = "("

    if (!this.head) return "()"

    while(curr.next) {
      // console.log(curr.data)
      list += String(curr.data) + ", "
      curr = curr.next
    }

    list += curr.data + ")"
    console.log(list)
    return list
  }

  append (data) {
    const newNode = new Node(data)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    return this
  }

  appendLeft (data) {
    const newNode = new Node(data)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    return this
  }

  pop () {
    const curr = this.tail

    if(curr) {

    }
  }
}

const linkedList = new DoublyLinkedList()

/*
linkedList.appendLeft("test2")
linkedList.appendLeft("test")
console.log(linkedList.head.data)
console.log(linkedList.tail.data)
linkedList.printList() */

linkedList.pop()
