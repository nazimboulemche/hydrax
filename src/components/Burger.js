document.querySelector(".fa-times").style.display = "none";

const menuBtn = document.querySelector(".btn-menu");
const sibeBar = document.querySelector(".sidebar");

menuBtn.onclick = function () {
  if (sibeBar.style.right == "-250px") {
    sibeBar.style.right = "0";
    document.querySelector(".fa-times").style.display = "";
    document.querySelector(".fa-bars").style.display = "none";
  } else {
    sibeBar.style.right = "-250px";
    document.querySelector(".fa-times").style.display = "none";
    document.querySelector(".fa-bars").style.display = "";
  }
};