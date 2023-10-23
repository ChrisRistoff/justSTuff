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

  getLength () {
    return this.length
  }
  printList () {
    let curr = this.head

    while (curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }

  append (data) {
    const newNode = new Node(data)

    if(!this.tail) {
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

  getValByIndex (index) {
    if (index > this.length-1) return undefined

    let curr = this.head

    for (let i = 0; i < index; i++) {
      curr = curr.next
    }

    return curr.data
  }

  pop () {
    if (!this.tail) return undefined

    const poppedVal = this.tail.data
    let curr = this.head
    this.length--

    for (let i = 1; i < this.length; i++) {
      curr = curr.next
    }

    curr.next = null
    this.tail = curr

    return poppedVal
  }

}

const linkedList = new LinkedList()
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.appendLeft(1)
linkedList.printList()

console.log("-----------------------------------------------")

console.log("POPPED ------", linkedList.pop())
linkedList.printList()
console.log("TAIL ----- ", linkedList.tail.data)
console.log("LENGTH ----- ", linkedList.getLength())
