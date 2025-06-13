let  photo = document.getElementById("photo");
let click = 0;

let cardP = document.getElementById("photo-card");
let swim = cardP.src;

let cardT = document.getElementById("photo-card2");
let iT = cardT.src;

let cardG = document.getElementById("photo-card3");
let dota = cardG.src;



let sOT = document.createElement("img");
sOT.src = "img/sis.jpg";
document.body.appendChild(sOT);
sOT.style.display = "none";

let progImgC = document.createElement("img");
progImgC.src = "img/programmer.jpg";
document.body.appendChild(progImgC);
progImgC.style.display = "none";


let boxingC = document.createElement("img");
boxingC.src = "img/boxing.jpg";
document.body.appendChild(boxingC);
boxingC.style.display = "none";


let num = 1;


photo.addEventListener( "click", () => {

    click++;
    if(click === 1) {
        alert("больно!");
    }
    else if(click === 2) {
        alert("прекрати если не хочешь проблем!");
    }
    else if(click === 5) {
        photo.src = "fredber.jpeg";
        setTimeout(() => alert("БУУУУУУУУУУ!!!!"), 50);
        
    }
    else if(click===6){
        
        return click=0, photo.src = "img/Me.png";
        
    }
});

function reMake(first, second, znachenie1 ){
    

    console.log(num);
    if(num >= 3){
        num = 0;
    }
    else if(num === 1){
        console.log("нажали епта");
        first.src=second.src;
    }
    else if(num === 2){
        console.log("ну не нажали епта");
        first.src=znachenie1;
    }
    num++;



};

cardP.addEventListener("click", () => reMake(cardP, boxingC, swim));
cardT.addEventListener("click", () => reMake(cardT, progImgC, iT));
cardG.addEventListener("click", () => reMake(cardG, sOT, dota));