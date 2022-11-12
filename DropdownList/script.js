// How to read value from Drop Down List using JavaScript
// window.open() --> Method

var navigate = document.getElementById("navigate");

navigate.addEventListener("change", function(){
    window.open(navigate.value, "myWindow", "width=300,height=200");
    // window.open(navigate.value, "_self"); --> open in self window

    // console.log(navigate.value);
}) 