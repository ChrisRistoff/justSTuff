class TreeNode {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


class BinaryTree {
  constructor () {
    this.root = null
  }

  insert (val) {
    const newNode = new TreeNode(val)

    if(this.root === null) {
      this.root = newNode
    } else {
      this._insert(this.root, newNode)
    }
  }

  traverse (node = this.root, arr = []) {
    if (node !== null) {
      this.traverse(node.left, arr)
      arr.push(node.val)
      this.traverse(node.right, arr)
    }

    return arr;
  }

  search (target, node = this.root) {
    if (node === null) return false;

    if (node.val === target) return true;

    if (node.val > target) {
      return this.search(target, node.left)
    } else {
      return this.search(target, node.right)
    }
  }

  _insert (node, newNode) {
    if (newNode.val < node.val) {

      if (node.left === null) {
        node.left = newNode
      } else {
        this._insert(node.left, newNode)
      }
    // if newNode.val > node.val
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insert(node.right, newNode)
      }
    }

  }
}

const tree = new BinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(12)
tree.insert(7)
tree.insert(23)
tree.insert(29)
tree.insert(6)
tree.insert(4)
tree.insert(21)
tree.insert(17)


console.log(tree.search(123123))
