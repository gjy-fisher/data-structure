function invertTree(node) {
    if (node === null) return
    invertTree(node.left)
    invertTree(node.right)
    const temp = node.right
    node.left = node.right
    node.right = temp
}