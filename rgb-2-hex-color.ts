/**
 * rgb(255,255,255)颜色转为#ffffff方法
 */
function rgb2HexColor(rgb: string) {
    const rgbArr = rgb.split(',').map(i => parseInt(i.replace(/[^0-9]/ig, "")))
    return `#${rgbArr[0].toString(16)}${rgbArr[1].toString(16)}${rgbArr[2].toString(16)}`
}

console.log(rgb2HexColor('rgb(185,200,64)'));
