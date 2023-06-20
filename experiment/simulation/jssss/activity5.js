var theta1;
var theta2;
var angle_of_rotation = [];
var concentration = [];
var plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity6();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
function activity5() {
    pp.clearleftpannel();
    load_main_table_2();
    // complete_table_act5();
    let des = `
  <p> Standerd Value S = (10 x &theta;) / length of tube x Concentration</p>
  <p>&theta;1 = Angle of rotation (position1)- reading for water(position1)</p>
  <p>&theta;2 = Angle of rotation (position2)- reading for water(position2)</p>
  <p>Angle of Rotation = (&theta;1 + &theta;2) / 2</p>
  `;
    pp.showdescription(des, 3);
}
function load_main_table_2() {
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
    let main_table_2 = `
  <div id="act4-main-table" class="table-responsive">
<table  class="table table-bordered" style="height: 95% !important;">
  <thead>


  <tr>
  <th colspan="6" style="font-size: calc(0.8vw + 9px); text-align: center; " scope="col">Observation Table for ${dd_value}</th>
</tr>


<tr>
  <th rowspan="2" >Sr No</td>
  <th style="text-align: center;"  colspan="2">
      Water
  </th>

  <th style="text-align: center;"  colspan="2">
      Angle of Rotation for ${dd_value}
  </th>

  
   <th rowspan="2" style="text-align: center;" scope="col" >Length of Tube (cm)</th>

   <th colspan="2" style="text-align: center;" scope="col" >&theta;</th>


   <th rowspan="2" scope="col">Angle of Rotation</th>
   <th rowspan="2" scope="col">Concentration</th>
   <th rowspan="2" scope="col">S</th>
   <th rowspan="2" id="check-column" scope="col">Check</th>
</tr> 


 <tr>
  <th  scope="col">Position1</th>
  <th scope="col">Position2</th>
  <th scope="col">Position1</th>
   <th scope="col">Position2</th>
   <th scope="col" >&theta;1</th>
   <th scope="col" >&theta;2</th>
 </tr>



  </thead>
  <tbody id="table-body">
  <tr>
  <td>1</td>
  <td>${main_table_data[sel_index].data[0][0]}</td>
  <td>${main_table_data[sel_index].data[0][1]}</td>
  <td>${main_table_data[sel_index].data[0][2]}</td>
  <td>${main_table_data[sel_index].data[0][1] + main_table_data[sel_index].data[0][2]}</td>
  <td>${main_table_data[sel_index].data[0][3]}</td>

 
  <td><input type="number" name="" id="inp-1"></td>
  <td><input type="number" name="" id="inp-2"></td>
  <td><input type="number" name="" id="inp-3"></td>
  <td>${main_table_data[sel_index].data[0][5]}</td>
  <td><input type="number" name="" id="inp-4"></td>
  <td><input type="button" value="Verify" onclick="verify_table2();" class="btn btn-primary"></td>
</tr>
  </tbody>
  </table>

  </div>
 
  `;
    pp.clearleftpannel();
    pp.addtoleftpannel(main_table_2);
}
function verify_table2() {
    let val1 = document.getElementById("inp-1");
    let val2 = document.getElementById("inp-2");
    let val3 = document.getElementById("inp-3");
    let val4 = document.getElementById("inp-4");
    console.log(parseFloat(val1.value));
    theta1 = main_table_data[sel_index].data[0][2] - main_table_data[sel_index].data[0][0];
    theta2 = main_table_data[sel_index].data[0][1] + main_table_data[sel_index].data[0][2] - main_table_data[sel_index].data[0][1];
    let s = ((theta1 + theta2) / 2) * 10 / (main_table_data[sel_index].data[0][3] * main_table_data[sel_index].data[0][5]);
    console.log(theta1, theta2, s);
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (Math.abs(parseFloat(val1.value) - theta1) > 0.00001) {
        console.log(parseFloat(val1.value), theta1);
        alert("please correct the theta 1 value");
        return;
    }
    if (Math.abs(parseFloat(val2.value) - theta2) > 0.000001) {
        console.log(parseFloat(val2.value), theta2);
        alert("please correct the theta 2 value");
        return;
    }
    if (!verify_values(parseFloat(val3.value), (theta1 + theta2) / 2)) {
        console.log(parseFloat(val3.value), (theta1 + theta2) / 2);
        alert("please correct the angle of rotation value");
        return;
    }
    if (!verify_values(parseFloat(val4.value), s)) {
        console.log(parseFloat(val4.value), s);
        alert("please correct the S value");
        return;
    }
    alert("Entered Value is correct");
    complete_table_act5();
    pp.showdescription("Click next to plot the graph", 3);
    pp.addtorightpannel(plot_btn, 3);
    // var bsOffcanvas = new bootstrap.Offcanvas(
    //   document.getElementById("offcanvasRight3")
    // );
    // bsOffcanvas.show();
}
function complete_table_act5() {
    let tb = document.getElementById('table-body');
    tb.innerHTML = ``;
    document.getElementById('check-column').remove();
    for (let i = 0; i < main_table_data[sel_index].data.length; i++) {
        let row = document.createElement('tr');
        angle_of_rotation[i] = (main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][0] + main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][1]) / 2;
        concentration[i] = main_table_data[sel_index].data[i][5];
        row.innerHTML = `
      <td>${i + 1}</td>
      <td>${main_table_data[sel_index].data[i][0]}</td>
      <td>${main_table_data[sel_index].data[i][1]}</td>
      <td>${main_table_data[sel_index].data[i][2]}</td>
      <td>${main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2]}</td>
      <td>${main_table_data[sel_index].data[i][3]}</td>
    
      <td>${main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][0]}</td>
      <td>${(main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][1]).toFixed(2)}</td>
      <td>${((main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][0] + main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][1]) / 2).toFixed(2)}</td>
      <td>${main_table_data[sel_index].data[i][5]}</td>
      <td>${(((main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][0] + main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2] - main_table_data[sel_index].data[i][1]) / 2) * 10 / (main_table_data[sel_index].data[i][3] * main_table_data[sel_index].data[i][5])).toFixed(2)}</td>
      `;
        tb.append(row);
    }
    console.log('table loaded sccessfully!');
    console.log(angle_of_rotation, concentration);
}
// <tr>
// <th scope="col">Sr No.</th>
// <th scope="col">&theta;</th>
// <th scope="col">first</th>
// <th scope="col">Concentration</th>
// <th scope="col">S</th>
// <th id="check-column" scope="col">Check</th>
// </tr>
//# sourceMappingURL=activity5.js.map