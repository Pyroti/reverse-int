module.exports = function reverse (n) {
    let str = n > 0 ?  n + '' : n * (-1) + '';
    let num = str.split('').reverse().join('');
    return +num;
}
