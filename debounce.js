function debounce(fn, delay, immediate, thisArg) {
    let timeout = null;
    let flag = false
    return function () {
        if (immediate && !flag) {
            fn.apply(this, thisArg);
            flag = true
        }
        // 如果事件再次触发就清除定时器，重新计时
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null
            fn.apply(this, thisArg);
        }, delay);
    };
}
