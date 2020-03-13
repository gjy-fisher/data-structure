class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binaryTree {
    constructor(arr) {
        this.root = null
        this.arr = []
        this.init.bind(this)
        this.insertNode.bind(this)
        this.init(arr)
    }
    init() {
        if (Object.prototype.toString.call(arr).slice(8, -1) !== 'Array') {
            return console.warn('arr except to be a array')
        }
        this.arr = arr
        this.arr.forEach(item => {
            this.root = this.insertNode(this.root, item)
        })
    }
    insertNode(node, value) {
        if (node === null) {
            node = new TreeNode(value)
        }
        if (node.value > value) {
            node.left = this.insertNode(node.left, value)
        }
        if (node.value < value) {
            node.right = this.insertNode(node.right, value)
        }
        return node
    }
    preorderTranversal(cb) {
        if (this.root === null) {
            return console.warn('except root not to be null')
        }
        function tranversal(node, cb) {
            if (!node) {
                return
            }
            cb(node)
            tranversal(node.left, cb)
            tranversal(node.right, cb)
        }
        tranversal(this.root, cb)
    }
    orderTranversal(cb) {
        if (this.root === null) {
            return console.warn('except root not to be null')
        }
        function tranversal(node, cb) {
            if (!node) {
                return
            }
            tranversal(node.left, cb)
            cb(node)
            tranversal(node.right, cb)
        }
        tranversal(this.root, cb)
    }
    postorderTranversal(cb) {
        if (this.root === null) {
            return console.warn('except root not to be null')
        }
        function tranversal(node, cb) {
            if (!node) {
                return
            }
            tranversal(node.left, cb)
            tranversal(node.right, cb)
            cb(node)
        }
        tranversal(this.root, cb)
    }
    invertTree() {
        if (this.root === null) return
        function _invertTree(node) {
            if (!node) return
            _invertTree(node.left)
            _invertTree(node.right)
            const temp = node.right
            node.right = node.left
            node.left = temp
        }
        _invertTree(this.root)
    }
}

const arr = [8, 13,3,7,19,21,15]

const _binaryTree = new binaryTree(arr)

console.log(JSON.stringify(_binaryTree.root))
console.log()
_binaryTree.preorderTranversal(_node => console.log(_node && _node.value))
console.log()
_binaryTree.orderTranversal(_node => console.log(_node && _node.value))
console.log()
_binaryTree.postorderTranversal(_node => console.log(_node && _node.value))
_binaryTree.invertTree()
console.log(_binaryTree.root)
