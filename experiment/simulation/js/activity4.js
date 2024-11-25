var table_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
var main_table;
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id="exp-title" style='width: 25vw;'>Obsevation Table</p>`, 3);
    pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
  <p>* Position 1 is your observed angle(degrees)</p>
  <p>* Position 2 = 180 + Position 1</p>
  </p>`, 3);
    load_main_table();
}
function load_main_table() {
    main_table = `
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
         <th rowspan="2" style="text-align: center;" id="a5-temp" scope="col">Check</th>
      </tr> 

  
       <tr>
        <th  scope="col">Position1</th>
        <th scope="col">Position2</th>
        <th scope="col">Position1</th>
         <th scope="col">Position2</th>
       </tr>



     </thead>
     <tbody id="table-5-body">
       <tr>
           <td>${inner_index + 1}</td>
           <td>${main_table_data[sel_index].data[inner_index][0]}</td>
           <td>${main_table_data[sel_index].data[inner_index][1]}</td>
           <td><input style="width: 100%;" id="mt-1" type="text" class="form-control"></td>
           <td><input style="width: 100%;" id="mt-2" type="text" class="form-control"></td>
           <td>${main_table_data[sel_index].data[inner_index][3]}</td>
           <td><input style="width: 100%;" class="btn btn-primary" onclick="act4_verify_table();" value="verify" style="width: 100%" type="button"></td>
       </tr>
     </tbody>
     </table>

     </div>
    
     `;
    pp.addtoleftpannel(main_table);
    //  add_variation();
}
function act4_verify_table() {
    let val1 = document.getElementById("mt-1");
    let val2 = document.getElementById("mt-2");
    if (!val1.value || !val2.value) {
        alert('Enter values in both fields');
        return;
    }
    console.log(parseFloat(val1.value), main_table_data[sel_index].data[inner_index][2]);
    console.log(parseFloat(val2.value), main_table_data[sel_index].data[inner_index][1] + main_table_data[sel_index].data[0][2]);
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (Math.abs(parseFloat(val1.value) - main_table_data[sel_index].data[inner_index][2]) > 0.000001) {
        console.log(parseFloat(val1.value), main_table_data[sel_index].data[inner_index][2]);
        alert("please correct the first value");
        return;
    }
    if (Math.abs(parseFloat(val2.value) - ((main_table_data[sel_index].data[inner_index][1] + main_table_data[sel_index].data[inner_index][2]))) > 0.01) {
        console.log(parseFloat(val2.value), main_table_data[sel_index].data[inner_index][1] + main_table_data[sel_index].data[inner_index][2]);
        alert("please correct the second value");
        return;
    }
    main_table_data[sel_index].data[inner_index][2] = parseFloat(val1.value);
    alert("all values are correct");
    complete_main_table();
    pp.showdescription("Click next to load the next table", 3);
    pp.addtorightpannel(table_btn, 3);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
}
function complete_main_table() {
    document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addtoleftpannel(main_table);
    let tb = document.getElementById('table-5-body');
    tb.innerHTML = ``;
    document.getElementById('a5-temp').remove();
    for (let i = 0; i < main_table_data[sel_index].data.length; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${main_table_data[sel_index].data[i][0]}</td>
        <td>${main_table_data[sel_index].data[i][1]}</td>
        <td>${main_table_data[sel_index].data[i][2]}</td>
        <td>${main_table_data[sel_index].data[i][1] + main_table_data[sel_index].data[i][2]}</td>
        <td>${main_table_data[sel_index].data[i][3]}</td>
        `;
        tb.append(row);
    }
    console.log('table loaded sccessfully!');
    // document.getElementById('panel1_btn').remove();
    // pp.addtorightpannel(act5_plot_btn, 3);
}
//# sourceMappingURL=activity4.js.map