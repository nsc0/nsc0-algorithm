function throttle(fn, delay) {
    let timer = 0, flag = true
    return function () {
        if (flag) {
            flag = false
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay);
        }
    }
}