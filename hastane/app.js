const foto =document.querySelectorAll(".hastane");

foto.forEach(hastane=>{
    hastane.addEventListener("click",()=>{
        removeActive();
        hastane.classList.add("active");
    });

})
function removeActive(){
    foto.forEach(hastane=>{
        hastane.classList.remove("active");
    })
}

 const mhrs=document.querySelector("#blog");
 const yeni =document.querySelector("#h");



 mhrs.addEventListener("click",()=>{
    
    
    yeni.style.color="red";
    yeni.style.fontSize='55px';
    yeni.style.speed=100;


 });

