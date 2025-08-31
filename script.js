var ImgBox = document.querySelector(".img-Box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");




originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxwidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
}

