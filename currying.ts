function sum(x: number) {
    let sum = x
    const plus = (y: number) => {
        sum += y
        return plus
    }
    plus.toString = () => sum
    return plus


}




console.log(Number(sum(1)(2)(3)));
