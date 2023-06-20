var conc;
let slider_index;
// new code starts here
var dd_value = '';
var standard_value;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle("Laurents half shade polarimeter BGT", 3);
    load_sugar_dd();
}
function load_sugar_dd() {
    let dd = document.createElement('div');
    dd.innerHTML = `
    <h3>Select the Sugar</h3>
    <select onchange="set_conc();" style="width: 50%;" class='form-select' name="" id="sugar-dd">
      <option value="">--Select a Solution--</option>
      <option value="Sucrose">Sucrose</option>
      <option value="Fructose">Fructose</option>
    </select>

    <br><br>

    <labelstyle="width: 50%;" id="concentration-sel">Concentration</label>
    <input disabled type="text" id="concentration" class="form-control" style="width: 50%;" />

    <p>Note: Please note down your selection and percentage of Concentration</p>

    <br><br>


    <label style="width: 20%;" id="concentration-sel">Position 1 </label> <br>
    <input style='width: 90%;' type="range" min='' max='' step='1' value='' id='s-1' onchange='position_1_change();' oninput='position_1_change();'>
    <br>
    <input class='form-control' id='show-s1'>
    <p>Note: Move slowly, the position 1 till the background color becomes green</p>


    <br><br>


    <label style="width: 20%;" id="concentration-sel">Position 2 </label><br>
    <input style='width: 90%;' type="range" min='' max='' step='1' value='' id='s-2' onchange='position_2_change();' oninput='position_2_change();'><br>
    <input class='form-control' id='show-s2'>
    <p>Note: Move slowly, the position 2 till the background color becomes green</p>


    <br>

    <div><input type="submit" class="btn btn-primary" onclick="activity4();"></div>
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
function set_conc() {
    set_dd_value();
    let sel_2 = document.getElementById('concentration');
    sel_2.disabled = false;
    sel_2.value = "0.01";
    conc = 0.01;
    sel_2.disabled = true;
    console.log("Fluid" + dd_value);
    if (dd_value == "Sucrose") {
        sel_index = 0;
        standard_value = 66;
    }
    else {
        sel_index = 1;
        standard_value = 52.7;
    }
    //set the activity 4 value 
    console.log(sel_index);
    add_variation();
    set_position_1();
    set_position_2();
}
function set_position_1() {
    let min = main_table_data[sel_index].data[0][2];
    let max = main_table_data[sel_index].data[3][2];
    let slider_1 = document.getElementById('s-1');
    min = min * 100 - 10;
    max = max * 100 + 10;
    slider_1.min = min.toString();
    slider_1.max = max.toString();
    // console.log("Min and Max values ==> ", min, max);
}
function set_position_2() {
    let min = 180 + main_table_data[sel_index].data[0][2];
    let max = 180 + main_table_data[sel_index].data[3][2];
    let slider_2 = document.getElementById('s-2');
    min = min * 100 - 10;
    max = max * 100 + 10;
    slider_2.min = min.toString();
    slider_2.max = max.toString();
    console.log("Min and Max values ==> ", min, max);
}
function add_variation() {
    for (let i = 0; i < main_table_data[sel_index].data.length; i++) {
        main_table_data[sel_index].data[i][2] = add_random_variation(main_table_data[sel_index].data[i][2]);
    }
    console.log(main_table_data);
}
function position_1_change() {
    let slider_1 = document.getElementById('s-1');
    let show1 = document.getElementById('show-s1');
    let val = parseFloat(slider_1.value) / 100;
    console.log(val);
    show1.value = val.toString();
    show1.style.backgroundColor = `red`;
    slider_index = -1;
    for (let i = 0; i <= 3; i++) {
        if (val == main_table_data[sel_index].data[i][2]) {
            show1.style.backgroundColor = `green`;
            slider_index = i;
            console.log(slider_index);
            break;
        }
    }
}
function position_2_change() {
    let slider_2 = document.getElementById('s-2');
    let show2 = document.getElementById('show-s2');
    let val = parseFloat(slider_2.value) / 100;
    console.log(val);
    show2.value = val.toString();
    show2.style.backgroundColor = `red`;
    if (180 + main_table_data[slider_index].data[slider_index][2] == val) {
        show2.style.backgroundColor = `green`;
    }
}
activity3();
//# sourceMappingURL=activity3.js.map