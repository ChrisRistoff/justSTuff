function TreeNode(value) {
  const node = {}
  node.val = value
  node.left = null
  node.right = null

  return node
}

function BinaryTree() {
  const tree = {}

  tree.root = null

  tree.insert = insert
  tree._insert = _insert
  tree.traverse = traverse
  tree.search = search

  return tree;
}

function insert(value) {
  const newNode = TreeNode(value)

  if (this.root === null) {
    this.root = newNode
  } else {
    this._insert(this.root, newNode)
  }

}

function _insert(node, newNode) {
  if (node.val > newNode.val) {
    if (node.left !== null) {
      this._insert(node.left, newNode)
    } else {
      node.left = newNode
    }
  } else {
    if (node.right !== null) {
      this._insert(node.right, newNode)
    } else {
      node.right = newNode
    }
  }
}

function traverse(node = this.root, arr = []) {
  if (node !== null) {
    traverse(node.left, arr)
    arr.push(node.val)
    traverse(node.right, arr)
  }

  return arr;
}

function search(value, node = this.root) {
  if (node === null) return false
  if (node.val === value) return true
  if (node.val > value) {
    return search(value, node.left)
  } else {
    return search(value, node.right)
  }
}

module.exports = BinaryTree
