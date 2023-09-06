var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",(axis)=>{
    crsr.style.left = axis.x + "px"
    crsr.style.top = axis.y + "px"
})