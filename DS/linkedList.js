class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
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

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  appendLeft (data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  pop () {
    if (!this.head) return
    if (this.head === this.tail && this.head) {
      const removedVal = this.head
      this.head = null
      this.tail = null
      this.length--
      return removedVal
    }

    let curr = this.head

    while (curr.next !== this.tail) {
      curr = curr.next
    }

    const removedVal = this.tail.data

    this.tail = curr
    this.tail.next = null
    this.length--

    return removedVal
  }

  popLeft () {
    if (!this.head) return
    if (this.head === this.tail) {
      const removedVal = this.head.data
      this.head = null
      this.tail = null
      this.length--
      return removedVal
    }

    const removedVal = this.head.data
    this.head = this.head.next
    this.length--

    return removedVal
  }

  getByIndex (index) {

    if (!this.head) return undefined
    let curr = this.head

    for (let i = 0; i < index; i++) {
      curr = curr.next
    }

    if (curr) return curr.data
    return undefined
  }

  getLength () {
    return this.length
  }

  findByVal(val) {
    let curr = this.head
    let index = 0

    while(curr) {
      if (curr.data === val) return [curr.data, index]
      index++
      curr = curr.next
    }

    return undefined
  }

  toArray (start=0, end=this.length-1) {
    let curr = this.head
    const arr = []

    for (let i = 0; i <= end; i++) {
      if (i >= start) arr.push(curr.data)
      curr = curr.next
    }

    return arr
  }

  fromArray(arr) {
    for (const item of arr) {
      const newNode = new Node(item)

      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }

      this.length++
    }

    return this
  }

  reverse () {
    let curr = this.head
    let prev = null

    for (let i = 0; i < this.length; i++) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    let temp = this.head
    this.head = this.tail
    this.tail = temp

    return this
  }
}

module.exports = LinkedList
