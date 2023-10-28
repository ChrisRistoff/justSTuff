import { ListNode } from "../linkedList"

export type NodeType = {
  data: string | number
  next: ListNode | null
}

export type ListType = {
  head: NodeType | null
  tail: NodeType | null

  printList: Function
  append: Function
  appendLeft: Function
  pop: Function
  popLeft: Function
  findByVal: Function
  getByIndex: Function
  toArray: Function
  fromArray: Function
  }
