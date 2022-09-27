/**
 * 
 * @param {*} str 
 * 千位加逗号
 */
function addComma(str) {
    const strArr = str.split('')
    const resArr = []
    let count = 0
    for (let i = strArr.length - 1; i >= 0; i--) {
        resArr.push(strArr[i])
        if (count < 2) {
            count++
        } else {
            count = 0
            resArr.push(',')
        }
    }
    return resArr.reverse().join('')

}

console.log(addComma('1234567'))