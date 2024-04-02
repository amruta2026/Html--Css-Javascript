
console.log(a)

let c = 0 ;
var images = ["img1.jpg" , "img2.jpg" , "img3.jpg" , "img4.jpg"]
function abc (){
    c = (c + 1) % images.length;
    document.getElementById("cng").innerHTML = "<img src='"+ images[c]+"'>" ;
}