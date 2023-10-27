let shareIcone = document.querySelector("i.fa-share");
let shareDiv = document.querySelector(".share");

shareIcone.onclick = function(){
    shareDiv.classList.toggle("active");
}