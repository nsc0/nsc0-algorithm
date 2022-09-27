function shuffle(arr) {
    const newArr = []
    let count = arr.length
    while (count > 0) {
        count--
        let randomIndex = (Math.random() * count) >>> 0
        newArr.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }
    return newArr
}

console.log(shuffle([1, 2, 3, 4, 5]))