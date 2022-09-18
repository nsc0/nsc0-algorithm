/**
 * 阻塞线程法，sleep函数
 * @param {number} wait 
 */
function sleep(wait: number) {
    let now = Date.now()
    while (now + wait > Date.now()) {
        continue
    }
}

/**
 * async/await 模拟sleep
 * @param wait 
 * @returns 
 */
function sleep2(wait: number) {
    return new Promise(res => {
        setTimeout(() => {
            res(true)
        }, wait);
    })
}


console.log('start');
sleep(3000)
console.log('end');


(async () => {
    console.log('start');
    await sleep2(3000)
    console.log('end');
})()