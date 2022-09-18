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
    for (const i of array) {
        map.set(i.id, i)
    }
    for (const i of array) {
        if (i.pid !== 0) {
            map.get(i.pid).children = i
        } else {
            tree.push(i)
        }
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

