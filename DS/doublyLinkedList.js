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
    if (index >= this.length) return undefined

    let curr = this.head

    for (let i = 0; i < index; i++) {
      curr = curr.next
    }

    return curr.data
  }

  findByVal (target) {
    if (!this.head) return undefined
    let curr = this.head

    for (let i = 0; i < this.length; i++) {
      if(curr.data === target) return [target, i]
      curr = curr.next
    }

    return undefined
  }

  toArray (start = 0, end = this.length-1) {
    if (!this.head) return []
    const arr = []
    let curr = this.head

    for (let i = 0; i <= end; i++){
      if (i >= start) arr.push(curr.data)
      curr = curr.next
    }

    return arr
  }

  toArrayReveerse (start = this.length-1, end = 0) {
    if (!this.head) return []
    const arr = []
    let curr = this.tail

    for (let i = 0; i <= start; i++){
      if (i >= end) arr.push(curr.data)
      curr = curr.prev
    }

    return arr
  }
}


module.exports = DoublyLinkedList
