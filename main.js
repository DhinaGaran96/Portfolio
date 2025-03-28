const show=document.getElementById("show")
const cancel=document.getElementById("cancel")
const menudetail=document.querySelector(".menu-details")
const about=document.querySelector("#menu-a")
const contact=document.querySelector("#menu-d")
show.addEventListener("click",function()
{
    menudetail.style.left="0%"
    menudetail.style.transition="2s"
})
cancel.addEventListener("click",function()
{
    menudetail.style.left="-100%"
    menudetail.style.transition="2s"
})
about.addEventListener("click",function()
{
    menudetail.style.left="-100%"
    menudetail.style.transition="1s"
})
contact.addEventListener("click",function()
{
    menudetail.style.left="-100%"
    menudetail.style.transition="1s"
})