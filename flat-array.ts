// 扁平数组
function flatArray(arr: Array<any>) {
    // 递归法
    let map: any[] = []
    for (const i of arr) {
        if (Array.isArray(i)) {
            map.push(...flatArray(i))
        } else {
            map.push(i)
        }
    }
    return map
}

console.log(flatArray([[6, 5, 4], [[3, 5, 6, 'c'], [[7, 6, 4], [[[6, 6, 6, 6]], [22, 5]]]], ['h', 'k']]));
