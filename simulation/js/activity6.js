var label = [];
var data = [];
var data1 = [];
var pol;
var calculated_slope;
var calculated_s;
function activity6() {
    pp.clearleftpannel();
    draw_chart();
}
var quiz_button = `<button id="panel1_btn" class="btn btn-primary" onclick="activity7();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
function draw_chart() {
    document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addcanvas('myChart');
    label = concentration;
    data = angle_of_rotation;
    // for(let i=0; i<obt_1_data.length; i++) {
    //     label.push(obt_1_data[i][0]);
    //     data.push(obt_1_data[i][6]);
    //     // data1.push(obt_2_data[i][6]);
    // }
    calculate_y_datapoints();
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Experimental',
                    data: data,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: false,
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'Best Fit',
                    data: data1,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "red",
                    // backgroundColor: "rgba(255, 0, 0, 0.5)",
                },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    min: 0,
                    title: {
                        display: true,
                        text: 'Angle of Rotation',
                        font: { size: 14, weight: 'bold' }
                    },
                },
                x: {
                    min: 0,
                    title: {
                        display: true,
                        text: 'Concentration',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Concentration vs Angle of Rotation`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    pp.showdescription('', 3);
    let calc_slope = `
    <p>Enter the valus of X1 (x coordinate) value: <input type="number" name="" id="x1"></p>
    <p>Enter the valus of X2 (x coordinate) value: <input type="number" name="" id="x2"></p>
    <p>Enter the valus of Y1 (y coordinate) value: <input type="number" name="" id="y1"></p>
    <p>Enter the valus of Y2 (y coordinate) value: <input type="number" name="" id="y2"></p>
    <p>Slope: <input type="text" name="" id="slope-inp"></p>
    <p>S: <input type="text" name="" id="s-inp"></p>
    <p><input id="act6-temp-btn" type="button" class="btn btn-primary" name="" onclick="verify_slope();" value="verify"></p>
    `;
    pp.showtitle(`<p id="exp-title" style='width: 25vw;'>Concentration vs Angle of Rotation</p>`, 3);
    pp.addtorightpannel(calc_slope, 3);
}
function calculate_y_datapoints() {
    console.log(label, data);
    pol = regression_linear_1variable(label, data);
    console.log(pol);
    data1 = [];
    for (let i = 0; i < label.length; i++) {
        data1.push((label[i] * pol));
    }
}
function verify_slope() {
    let val1 = document.getElementById("x1");
    let val2 = document.getElementById("x2");
    let val3 = document.getElementById("y1");
    let val4 = document.getElementById("y2");
    let val5 = document.getElementById("slope-inp");
    let val6 = document.getElementById("s-inp");
    let m = (data1[0] - data1[1]) / (concentration[0] - concentration[1]);
    if (!verify_values(parseFloat(val5.value), m)) {
        console.log(parseFloat(val5.value), concentration[1]);
        alert("please correct the slope value");
        return;
    }
    let s = (10 / main_table_data[sel_index].data[0][3]) * (m);
    if (!verify_values(parseFloat(val6.value), s)) {
        console.log(parseFloat(val6.value), concentration[1]);
        alert("please correct the S value");
        return;
    }
    calculated_slope = m;
    calculated_s = s;
    alert("Entered Value is correct");
    // pp.showdescription(`You have entered correct values, now click next <br> The calculated values of S = ${calculated_s}`, 3);
    console.log(m, s);
    pp.addtorightpannel(quiz_button, 3);
    document.getElementById('act6-temp-btn').remove();
    let slope2 = document.getElementById('slope-inp');
    slope2.value = m.toFixed(3);
    slope2.disabled = true;
    let s2 = document.getElementById("s-inp");
    s2.value = s.toFixed(3);
    s2.disabled = true;
}
//# sourceMappingURL=activity6.js.map