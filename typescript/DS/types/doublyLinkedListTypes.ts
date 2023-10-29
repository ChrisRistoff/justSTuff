

export type NodeType = {
  data: string | number
  next: NodeType | null
  prev: NodeType | null
}

export type DoublyListType = {
  head: NodeType | null
  tail: NodeType | null
  length: number

  printList: Function
  append: Function
  appendLeft: Function
  pop: Function
  popLeft: Function
  findByVal: Function
  getByIndex: Function
  toArray: Function
  fromArray: Function
  reverse: Function
}
