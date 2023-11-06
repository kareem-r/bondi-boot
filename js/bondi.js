let aalls=document.querySelectorAll(".navbar-nav li a");
console.log(aalls)
aalls.forEach((li)=>{
    li.addEventListener("click",function removeactive(){
        aalls.forEach((li)=>{
            li.classList.remove("active")
            this.classList.add("active")
        })
    })

})

let switcherlis=document.querySelectorAll(".switcher li")
console.log(switcherlis)
let imgs=Array.from(document.querySelectorAll(".our-work .box img"))
console.log(imgs)
switcherlis.forEach((li)=>{
    li.addEventListener("click",function removeactive(){
        switcherlis.forEach((li)=>{
            li.classList.remove("active")
            this.classList.add("active")
        })
    }
    )
    li.addEventListener("click",manageimgs)

})
function manageimgs(){
    imgs.forEach((img)=>{img.style.display="none";})
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display="block"
    })
}