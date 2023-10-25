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
  tree.traverseReverse = traverseReverse
  tree.search = search
  tree.deleteNode = deleteNode

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

function traverseReverse(node = this.root, arr = []) {
  if (node !== null) {
    traverseReverse(node.right, arr)
    arr.push(node.val)
    traverseReverse(node.left, arr)
  }

  return arr;
}

function deleteNode (value, root = this.root) {
  if (root === null) return root;

  if (value < root.val) {
    root.left = deleteNode(value, root.left)
  } else if (value > root.val) {
    root.right = deleteNode(value, root.right)
  }

  else {
    if (root.left === null) {
      let temp = root.right
      root = null
      return temp;
    }

    else if (root.right === null) {
      let temp = root.left
      root = null
      return temp;
    }

    let temp = root.right

    while (temp.left !== null) {
      temp = temp.left
    }
    root.val = temp.val
    root.right = deleteNode(temp.val, root.right)
  }

  return root;
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
