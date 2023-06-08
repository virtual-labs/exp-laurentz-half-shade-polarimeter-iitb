function verify_values(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let calculated_value = Math.abs((truevalue - value) / truevalue * 100);
    if (calculated_value <= 4) {
        return true;
    }
    else {
        return false;
    }
}
function random(min, max) {
    let num = (max - min) * Math.random() + min;
    return num;
}
function std_deviation(num) {
    let std = num / 100.0;
    std = std / 2;
    let dev = num - random(-std, std);
    return dev;
}
function regression_linear(x, y) {
    let sumx = 0;
    let sumy = 0;
    let sumxy = 0;
    let sumxx = 0;
    let n = x.length;
    for (let i = 0; i < n; i++) {
        sumx += x[i];
        sumy += y[i];
        sumxy += x[i] * y[i];
        sumxx += x[i] * x[i];
    }
    let pol = [];
    pol[0] = (sumx * sumy - n * sumxy) / (Math.pow(sumx, 2) - n * sumxx);
    pol[1] = (sumy - pol[0] * sumx) / n;
    return (pol);
}
function newton_raphson(a, b, c) {
    let root = 0.1;
    for (let i = 0; i <= 100; i++) {
        root = root - f(a, b, c, root) / df(a, b, c, root);
    }
    return root;
}
function f(a, b, c, x) {
    let fx = a * x - b * Math.pow(x, 2) * (1 - Math.exp(-1 / x)) - c;
    return fx;
}
function df(a, b, c, x) {
    let fx = a - b * x * 2 + b * Math.exp(-1 / x) + 2 * b * x * Math.exp(-1 / x);
    return fx;
}
var c = 32386.13959 / Math.pow(411.4789768, 2);
var a = 2;
var b = 2;
function add_random_variation(num) {
    // let val = num;
    // if(val < 0)  {return;}   
    // val = val - Math.floor(val);
    // let x = Math.random();
    // if(x <= 0.34) {
    //     val = val - 0.1;
    // } else if(x > 0.66) {
    //     val = val + 0.1;
    // }
    // let result = Math.floor(num) + val;
    // return parseFloat(result.toFixed(2));
    console.log("first " + num);
    let std = 1;
    num = num * 100 + (std + std) * Math.random() - std;
    console.log("second " + num);
    num = Math.round(num) / 100;
    console.log("third " + num);
    return (num);
}
function verify2(num, num2) {
    let val = num;
    if (val < 0) {
        return;
    }
    val = val - Math.floor(val);
    if (num2 >= (Math.floor(num) + val - 0.1) && num2 <= (Math.floor(num) + val + 0.1)) {
        return true;
    }
    else {
        return false;
    }
}
function compare_float_numbers(num1, num2) {
}
function regression_linear_1variable(x, y) {
    let sum_sqx = 0;
    let sumxy = 0;
    for (let i = 0; i < x.length; i++) {
        sum_sqx += Math.pow(x[i], 2);
        sumxy += x[i] * y[i];
    }
    return (sumxy / sum_sqx);
}
//# sourceMappingURL=common.js.map