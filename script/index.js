let popupElm = Array.from(document.querySelectorAll(".image"));
let popupModelElm = document.querySelector(".popup-image");
let popupCrossElm = document.querySelector(".popup-image span")
let popupModelImgElm = document.querySelector(".popup-image img");


popupElm.map((popup)=>{
    let imageSrc = popup.querySelector("img").getAttribute("src");
    popup.addEventListener("click",()=>{
        popupModelImgElm.setAttribute("src",imageSrc);
        popupModelElm.style.display = "block";
    })
})

popupCrossElm.addEventListener("click",()=>{
    popupModelElm.style.display = "none";
})