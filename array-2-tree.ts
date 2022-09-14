interface TreeNode {
    id: number
    name: string
    pid: number
    children?: Array<TreeNode>
}
/**
 * 数组转树
 * @param array 
 */
function array2Tree(array: TreeNode[]): TreeNode[] {
    const tree: TreeNode[] = []
    const map = new Map()
    // 先循环构建map
    for (const item of array) {
        item.children = []
        map.set(item.id, item)
    }
    // 再构建树
    for (const item of array) {
        if (item.pid !== 0)
            map.get(item.pid).children.push(item)
        else tree.push(item)
    }
    return tree
}

const a = [
    { id: 6, name: '部门5', pid: 4 },
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },]
console.log(JSON.stringify(array2Tree(a)));
console.log(a);

