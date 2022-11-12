const progress = document.querySelector(".progress");
// console.log(document.body.clientHeight);
const element = document.getElementsByTagName("body");
const pageHeight = element.clientHeight - window.innerHeight; // to get full body height
console.log(element.clientHeight);

window.addEventListener("scroll", () => {
    const progressBar = Math.floor((window.pageYOffset / 500000) * 100); // mMath.floor used to round the value
    console.log(progressBar);
    progress.style.width = progressBar + '%';
    // console.log(window.scrollY); --> to get scroll height
})