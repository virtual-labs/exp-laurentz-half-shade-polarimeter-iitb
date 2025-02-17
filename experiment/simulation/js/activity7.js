var quiz_answer = 'false';
function activity7() {
    pp.clearleftpannel();
    pp.showtitle(``, 3);
    pp.showdescription(`<p id="exp-title" style='width: 25vw;'>Results</p>`, 3);
    document.getElementById('hide_panel3').click();
    let quiz_text = `
    <div>

        <div>
            <p>Standard Value of Specific Rotation of ${dd_value} ==> ${main_table_data[sel_index].data[0][4].toFixed(2)}</p>
            <p>Experimental Value of Specific Rotation of ${dd_value} ==> ${calculated_s.toFixed(2)}</p>
        </div>


        <br><br>

        <div>
            <h3>Question</h3>
            <h3>Is specific rotation (S) value less than the Standard value?</h3>
            <label for="yes_ans">Yes</label>
            <input id="yes_ans" type="radio" name="quiz_ans" value="true" onclick="check_quiz('true');">

            <label for="no_ans">No</label>
            <input type="radio" name="quiz_ans" id="no_ans" value="false"  onclick="check_quiz('false');">
        </div>

    </div>
    `;
    if (calculated_s < standard_value) {
        quiz_answer = 'true';
    }
    pp.addtoleftpannel(quiz_text);
}
function check_quiz(e) {
    console.log(e, quiz_answer);
    if (e == quiz_answer) {
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
      Your answer is correct. You have successfully completed the experiment.
      </div>`, 3);
    }
    else {
        pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">
      Your Answers is Incorrect, It is less than the standard value <br> ${calculated_s.toFixed(2)} < ${standard_value}<br> Experiment completed.
      </div>`, 3);
    }
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasRight3'));
    bsOffcanvas.show();
}
//# sourceMappingURL=activity7.js.map