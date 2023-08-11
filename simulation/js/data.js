let arr = [];
let arr2 = [];
let diffr = (255 - 0) / (143 - 9143);
let diffg = (255 - 0) / (143 - 9143);
let diffb = (0 - 0) / (143 - 9143);
var main_table_data = [
    { data: [
            [0, 180, 1.45, 22, 66, 0.01, 1.45],
            [0, 180, 2.9, 22, 66, 0.02, 2.9],
            [0, 180, 4.35, 22, 66, 0.03, 4.35],
            [0, 180, 5.8, 22, 66, 0.04, 5.8]
        ] },
    { data: [
            [0, 180, 1.15, 22, 52.7, 0.01, 1.15],
            [0, 180, 2.3, 22, 52.7, 0.02, 2.3],
            [0, 180, 3.45, 22, 52.7, 0.03, 3.45],
            [0, 180, 4.6, 22, 52.7, 0.04, 4.6]
        ] }
];
make_color_array(1.43);
make_color_array_2(1.43);
function make_color_array(num) {
    let ang = num * 100;
    arr = [];
    let rgb = [];
    for (let i = 0; i < 36000; i++) {
        rgb = [];
        if (i < ang) {
            rgb = [i, (255 + diffr * (ang - i)), (255 + diffg * (ang - i)), (diffb * (ang - i))];
            arr.push(rgb);
        }
        else if (i >= ang && i < (9000 + ang)) {
            rgb = [i, (255 + diffr * (i - ang)), (255 + diffg * (i - ang)), (diffb * (i - ang))];
            arr.push(rgb);
        }
        else if (i >= (9000 + ang) && i < (18000 + ang)) {
            rgb = [i, (255 + diffr * ((9000 + ang) - (i - (9000 + ang)))), (255 + diffg * ((9000 + ang) - (i - (9000 + ang)))), (diffb * ((9000 + ang) - (i - (9000 + ang))))];
            arr.push(rgb);
        }
        else if (i >= (18000 + ang) && i < (27000 + ang)) {
            rgb = [i, (255 + diffr * (i - (18000 + ang))), (255 + diffg * (i - (18000 + ang))), (diffb * (i - (18000 + ang)))];
            arr.push(rgb);
        }
        else if (i >= (27000 + ang) && i <= 35999) {
            rgb = [i, (255 + diffr * ((9000 + ang) - (i - (27000 + ang)))), (255 + diffg * ((9000 + ang) - (i - (27000 + ang)))), (diffb * ((9000 + ang) - (i - (27000 + ang))))];
            arr.push(rgb);
        }
    }
}
function make_color_array_2(num) {
    let ang = num * 100;
    arr2 = [];
    let rgb = [];
    for (let i = 0; i < 36000; i++) {
        rgb = [];
        if (i < ang) {
            rgb = [i, (255 + diffr * ((9000 + ang) - (ang - i)))];
            arr2.push(rgb);
        }
        else if (i >= ang && i < (9000 + ang)) {
            rgb = [i, (255 + diffr * ((9000 + ang) - (i - ang)))];
            arr2.push(rgb);
        }
        else if (i >= (9000 + ang) && i < (18000 + ang)) {
            rgb = [i, (255 + diffr * (i - (9000 + ang)))];
            arr2.push(rgb);
        }
        else if (i >= (18000 + ang) && i < (27000 + ang)) {
            rgb = [i, (255 + diffr * ((9000 + ang) - (i - (18000 + ang))))];
            arr2.push(rgb);
        }
        else if (i >= (27000 + ang) && i <= 35999) {
            rgb = [i, (255 + diffr * (i - (27000 + ang)))];
            arr2.push(rgb);
        }
    }
}
// function make_color_array_2() {
//   let rgb = [];
//   for(let i=0; i<36000; i++) {
//     rgb = [];
//     if(i < 143) {
//       rgb = [i, (255 + diffr*(9143 - (143 - i)))];
//       arr2.push(rgb);
//     } else if(i >= 143 && i< 9143) {
//       rgb = [i, (255 + diffr*(9143 - (i - 143)))];
//       arr2.push(rgb);
//     } else if(i >= 9143 && i< 18143) {
//       rgb = [i, (255 + diffr*(i - 9143))]; 
//       arr2.push(rgb);
//     } else if(i >= 18143 && i< 27143) {
//       rgb = [i, (255 + diffr*(9143 - (i-18143)))];
//       arr2.push(rgb);
//     } else if(i >= 27143 && i<= 35999) {
//       rgb = [i, (255 + diffr*(i - 27143))];
//       arr2.push(rgb);
//     }
//   }
//# sourceMappingURL=data.js.map