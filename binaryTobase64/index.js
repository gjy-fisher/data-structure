function textToBinary (text) {
    let number = text.charCodeAt().toString(2)
    const len = number.length
    const rest = len % 8
    const loopTime = 8 - rest
    for (let i = 0; i < loopTime; i++) {
        number = 0 + number 
    }
    return number
}

function binaryToBase64(code) {
    const base64code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    const len = code.length
    let res = ''
    let base64 = ''
    if (len % 24 === 8) {
        code += '0000'
        res += '=='
    }
    if (len % 24 === 16) {
        code += '00'
        res += '='
    }
    for (let i = 0; i < len; i+=6) {
        const item = code.slice(i, i + 6)
        base64 += base64code[parseInt(item, 2)]
    }
    return base64 + res
}
const binary = textToBinary('a')
console.log(binary)
console.log(binaryToBase64(binary))
