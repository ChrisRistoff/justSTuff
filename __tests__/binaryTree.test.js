const BinaryTree = require("../DS/binaryTree")

describe('test BinaryTree', () => {

  describe('test insert method', () => {
    it('should insert an item into the root and left and right nodes', () => {
      const tree = BinaryTree()
      expect(tree.root).toBeNull()

      tree.insert(5)
      expect(tree.root.val).toBe(5)
      tree.insert(2)
      expect(tree.root.left.val).toBe(2)
      tree.insert(10)
      expect(tree.root.right.val).toBe(10)
    })
  })

  describe('traverse method', () => {
    it('should return a sorted array of the items in the tree', () => {
      const tree = BinaryTree()
      expect(tree.traverse()).toEqual([])
      tree.insert(5)
      tree.insert(15)
      tree.insert(6)
      tree.insert(1)
      expect(tree.traverse()).toEqual([1,5,6,15])
    })
  })

  describe('test search method', () => {
    it('should return true or false if item is or is not in the tree', () => {
      const tree = BinaryTree()
      tree.insert(5)
      tree.insert(15)
      tree.insert(6)
      tree.insert(1)
      expect(tree.search(5)).toBe(true)
      expect(tree.search(15)).toBe(true)
      expect(tree.search(6)).toBe(true)
      expect(tree.search(1)).toBe(true)
      expect(tree.search(8)).toBe(false)
      expect(tree.search(21)).toBe(false)
    })
  })

  describe('test traverseReverse method', () => {
    it('should return an array of the tree in reverse order', () => {
      const tree = BinaryTree()
      expect(tree.traverseReverse()).toEqual([])
      tree.insert(5)
      tree.insert(15)
      tree.insert(6)
      tree.insert(1)
      expect(tree.traverseReverse()).toEqual([15,6,5,1])
    })
  })

  describe('test deleteNode method', () => {
    it('should remove the node from the tree', () => {
      const tree = BinaryTree()
      tree.insert(5)
      tree.insert(15)
      tree.insert(6)
      tree.insert(1)
      expect(tree.traverseReverse()).toEqual([15,6,5,1])
      tree.deleteNode(15)
      expect(tree.traverseReverse()).toEqual([6,5,1])
    })

  })
})
