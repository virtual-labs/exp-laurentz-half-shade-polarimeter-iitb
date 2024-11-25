var conc;
let slider_index;
var sel_index = -1;
var inner_index = 0;
let sem1;
let sem2;
let angle_val;
// new code starts here
var dd_value = '';
var standard_value;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id="exp-title" style='width: 25vw;'>Obsevation Table</p>`, 3);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
  After Observing the angle at which both halfs become same color (display will become green).
  <span style='color: blue; font-weight: 600;' >Note down all the selected values and press 'set selected values' button</span>
  </p>`, 3);
    load_sugar_dd();
    //define the canvas
    pp.addcanvas('mycanvas');
    // pp.addtorightpannel(question_div_box, 3);
    pp.showscore(0, 3);
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    // add rect and scene
    canvas.style.cursor = "crosshair";
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    sem1 = new Chemistry.SemiCircle(new Chemistry.Point(1400, 340), 180, canvas);
    sem1.rotate_ang = 90;
    sem2 = new Chemistry.SemiCircle(new Chemistry.Point(1400, 340), 180, canvas);
    sem2.rotate_ang = 270;
    scene.add(sem1);
    scene.add(sem2);
    // add canvas sizing
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    //draw scene
    scene.draw();
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
}
function a2_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function load_sugar_dd() {
    let dd = document.createElement('div');
    dd.innerHTML = `
  <div style='position: absolute; width: 97vw; height: 100%; overflow: auto;'>
 
 
    <label style="width: 50%; font-size: 1.5vw; margin-left: 2vw; font-weight: 600;">Select the Sugar</label>
    <select onchange="set_conc();" style="width: 50%;  font-size: 1.5vw; margin-left: 2vw;" class='form-select' name="" id="sugar-dd">
      <option value="">--Select a Solution--</option>
      <option value="Sucrose">Sucrose</option>
      <option value="Fructose">Fructose</option>
    </select>


    <label style="width: 50%;  font-size: 1.5vw; margin-left: 2vw; font-weight: 600;" id="concentration-sel">Concentration</label>
  
    <select id="concentration-1" onchange='sel_conc();' class="form-select" style="width: 50%;  font-size: 1.5vw; margin-left: 2vw;" disabled >
      <option defualt value=''>Select Concentration</option>
      <option value='0.01'>1%</option>
      <option value='0.02'>2%</option>
      <option value='0.03'>3%</option>
      <option value='0.04'>4%</option>
    </select>

    <p style="width: 50%; font-size: 1.5vw; margin-left: 2vw;">Note: Please note down the following
    <p style='font-size: 2vw; color: green; margin: 0 0 0 2vw;'>-Sugar Type</p>
    <p style='font-size: 2vw; color: green; margin: 0 0 0 2vw;'>-Percentage of Concentration</p>
    <p style='font-size: 2vw; color: green; margin: 0 0 0 2vw;'>-Angular Reading</p>
    </p>



    <label style="position: absolute; top: 28vw;  width: 20%; margin-left: 2vw; font-size: 1.5vw; font-weight: 600;" id="concentration-sel">Angle Slider</label> <br>
    <input style='position: absolute; top: 32vw; width: 84vw; margin-left: 2vw; font-size: 1.5vw;' type="range" min='43' max='19000' step='100' value='43' id='s-1' onchange='position_1_change();' oninput='position_1_change();' disabled>
    <input style='position: absolute; top: 35vw; width: 84vw; margin-left: 2vw;  font-size: 1.5vw;' id='show-s1'>
    <p style='position: absolute; top: 38vw; width: 95%;  font-size: 1.5vw; margin-left: 2vw;'>Note: Move  the slider slowly till the both the halfs show exactly the same color</p>


    <div style='position: absolute; left: 70vw; top: 2vw;;'><input disabled type="submit" class="btn btn-primary" onclick="save_move_to_act4();" value='Set Selected Values' style='font-size: 1.5vw;' id='act3-nxt-btn'></div>
    </div>
  `;
    pp.addtoleftpannel(dd.innerHTML);
}
function set_dd_value() {
    let dd = document.getElementById('sugar-dd');
    if (dd.value != '') {
        dd_value = dd.value;
        console.log("Value saved as:" + dd.value);
        // activity4();
    }
}
function sel_conc() {
    let sel_2 = document.getElementById('concentration-1');
    conc = parseFloat(sel_2.value);
    let sdr = document.getElementById('s-1');
    sdr.disabled = false;
    console.log("Fluid" + dd_value);
    if (dd_value == "Sucrose") {
        sel_index = 0;
        standard_value = 66;
    }
    else {
        sel_index = 1;
        standard_value = 52.7;
    }
    for (let i = 0; i < main_table_data[sel_index]['data'].length; i++) {
        console.log(conc, main_table_data[sel_index]['data'][i][5]);
        if (conc == main_table_data[sel_index]['data'][i][5]) {
            inner_index = i;
            console.log(inner_index);
            break;
        }
    }
    //set the activity 4 value 
    // console.log(sel_index);
    add_variation();
    set_position_1();
    set_position_2();
    sdr.min = ((angle_val - 1) * 100).toString();
    sdr.value = ((angle_val - 1) * 100).toString();
    sdr.value = '100';
    let btn = document.getElementById('act3-nxt-btn');
    btn.disabled = false;
}
function set_conc() {
    set_dd_value();
    let sel_2 = document.getElementById('concentration-1');
    sel_2.disabled = false;
    // conc = 0.01;
}
function set_position_1() {
    let min = main_table_data[sel_index].data[0][2];
    let max = main_table_data[sel_index].data[3][2];
    let slider_1 = document.getElementById('s-1');
    // min = min*100 - 10;
    // max = max*100 + 10;
    // slider_1.min = min.toString();
    // slider_1.max = max.toString();
    // console.log("Min and Max values ==> ", min, max);
}
function set_position_2() {
    let min = 180 + main_table_data[sel_index].data[0][2];
    let max = 180 + main_table_data[sel_index].data[3][2];
    let slider_2 = document.getElementById('s-2');
    // min = min*100 - 10;
    // max = max*100 + 10;
    // slider_2.min = min.toString();
    // slider_2.max = max.toString();
    //console.log("Min and Max values ==> ", min, max);
}
function add_variation() {
    for (let i = 0; i < main_table_data[sel_index].data.length; i++) {
        main_table_data[sel_index].data[i][2] = add_random_variation(main_table_data[sel_index].data[i][2]);
        main_table_data[sel_index].data[i][6] = main_table_data[sel_index].data[i][2];
    }
    angle_val = main_table_data[sel_index].data[inner_index][2];
    // console.log(main_table_data);
}
function position_1_change() {
    let slider_1 = document.getElementById('s-1');
    let show1 = document.getElementById('show-s1');
    let val = parseFloat(slider_1.value) / 100;
    // console.log(val);
    let num = main_table_data[sel_index].data[inner_index][6] * 100;
    diffr = (255 - 0) / (num - (9000 + num));
    diffg = (255 - 0) / (num - (9000 + num));
    diffb = (0 - 0) / (num - (9000 + num));
    make_color_array(angle_val);
    make_color_array_2(angle_val);
    show1.value = val.toString();
    if (val == main_table_data[sel_index].data[inner_index][6]) {
        console.log('found');
        show1.value = val.toString();
        show1.style.backgroundColor = 'green';
    }
    else {
        show1.style.backgroundColor = `red`;
    }
    slider_index = -1;
    // for(let i=0; i<=3; i++) {
    //   if(val == main_table_data[sel_index].data[i][2]) {
    //     show1.style.backgroundColor = `green`;
    //     slider_index = i;
    //     console.log(slider_index);
    //     break;
    //   }
    // }
    let ang = parseFloat(slider_1.value);
    // console.log(`rgb(${arr[((ang-1)) - 1][1]}, ${arr[((ang-1)) - 1][2]}, ${arr[((ang-1)) - 1][3]})`, `rgb('255', '255', ${arr2[((ang-1)) - 1][1]})`);
    sem1.color = `rgb(${arr[((ang - 1)) - 1][1]}, ${arr[((ang - 1)) - 1][2]}, ${arr[((ang - 1)) - 1][3]})`;
    sem2.color = `rgb(255, 255, ${arr2[((ang - 1)) - 1][1]})`;
    scene.draw();
}
function position_2_change() {
    let slider_2 = document.getElementById('s-2');
    let show2 = document.getElementById('show-s2');
    let val = parseFloat(slider_2.value) / 100;
    // console.log(val);
    show2.value = val.toString();
    show2.style.backgroundColor = `red`;
    if (180 + main_table_data[slider_index].data[slider_index][2] == val) {
        show2.style.backgroundColor = `green`;
    }
}
function save_move_to_act4() {
    let num = main_table_data[sel_index].data[inner_index][6] * 100;
    diffr = (255 - 0) / (num - (9000 + num));
    diffg = (255 - 0) / (num - (9000 + num));
    diffb = (0 - 0) / (num - (9000 + num));
    make_color_array(angle_val);
    make_color_array_2(angle_val);
    activity4();
}
// <label style="width: 20%;" id="concentration-sel">Position 2 </label><br>
// <input style='width: 90%;' type="range" min='' max='' step='1' value='' id='s-2' onchange='position_2_change();' oninput='position_2_change();'><br>
// <input class='form-control' id='show-s2'>
// <p>Note: Move slowly, the position 2 till the background color becomes green</p>
// <input disabled type="text" id="concentration" class="form-control" style="width: 50%;  font-size: 1.5vw; margin-left: 2vw;"  />
//# sourceMappingURL=activity3.js.map