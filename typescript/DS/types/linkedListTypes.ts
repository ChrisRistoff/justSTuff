import { ListNode } from "../linkedList"

export type NodeType = {
  data: string | number
  next: ListNode | null
}

export type ListType = {
  head: NodeType | null
  tail: NodeType | null

  append: Function
  }
