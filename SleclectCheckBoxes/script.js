// Select all check boxes with pure JS using checked property
// Select all check boxes with jQuery  prop() method
// preventDefault() method in JS

var checkBoxes = document.getElementsByClassName("chkbx");
var selectAll  = document.getElementById("selall");

selectAll.addEventListener("click", () =>{
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
        
    }
})

var selectNone = document.getElementById("selnon");

selectNone.addEventListener("click", () =>{
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
        
    }
})