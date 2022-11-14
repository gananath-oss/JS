// classList Property
// How to add a CSS class  an HTML Tag
// How to remove a CSS class om an HTML Tag

function showTab(tabNumber){
    console.log(tabNumber);
    document.getElementsByClassName("show")[0].classList.add("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("tabcontent-" + tabNumber).classList.add("show");
    document.getElementById("tabcontent-" + tabNumber).classList.remove("hide");
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById("tab-" + tabNumber).classList.add("active");
}