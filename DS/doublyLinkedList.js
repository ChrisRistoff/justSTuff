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
    this.length = 0
  }

  getLength () {
    return this.length
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
    return list
  }

  append (data) {
    const newNode = new Node(data)

    if (!this.tail) {
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

  appendLeft (data) {
    const newNode = new Node(data)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }

    return this
  }

  pop () {
    if(this.tail) {
      if(this.tail === this.head) {
        const poppedData = this.head.data
        this.tail = null
        this.head = null
        this.length--
        return poppedData
      }

      const newTail = this.tail.prev
      const poppedData = this.tail.data

      newTail.next = null
      this.tail = newTail

      this.length--

      return poppedData
    }

    return undefined
  }

  popLeft () {
    if (this.head) {
      if(this.tail === this.head) {
        const poppedData = this.head.data
        this.tail = null
        this.head = null
        this.length--
        return poppedData
      }

      const poppedData = this.head.data
      const newHead = this.head.next

      newHead.prev = null
      this.head = newHead

      this.length--

      return poppedData
    }
  }

  getByIndex (index) {
    if (index > this.length) return undefined

    let curr = this.head

    for (let i = 0; i < array.length; i++) {
      curr = curr.next
    }

    return curr.data
  }

  findByVal () {

  }
}

/*
const linkedList = new DoublyLinkedList()
linkedList.append("test1")
linkedList.append("test2")
linkedList.appendLeft("test")
console.log(linkedList.head.data)
console.log(linkedList.tail.data)
linkedList.printList()
linkedList.printList()
 */

module.exports = DoublyLinkedList
