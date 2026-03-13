let clickCount = 0;



setInterval(()=>{

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*2+3)+"s";

document.getElementById("heart-container").appendChild(heart);

setTimeout(()=>heart.remove(),5000);

},400);





function showValentine(){

document.getElementById("page1").style.display="none";

document.getElementById("page2").style.display="block";

document.getElementById("loveSong").play();

}



function moveNo(){

clickCount++;

const no=document.getElementById("noBtn");

const yes=document.getElementById("yesBtn");

const q=document.getElementById("question");



const x=Math.random()*(window.innerWidth-100);

const y=Math.random()*(window.innerHeight-50);



no.style.position="fixed";

no.style.left=x+"px";

no.style.top=y+"px";



if(clickCount===1)

q.innerText="Please 🥹";

else if(clickCount===2)

q.innerText="Pleasee 🥹";

else

q.innerText="Yess"+"s".repeat(clickCount-1)+" 🥹";



let currentSize=parseFloat(window.getComputedStyle(yes).fontSize);

yes.style.fontSize=(currentSize+10)+"px";

yes.style.padding=(currentSize+5)+"px";

}



function selectYes(){

confetti({

particleCount:200,

spread:120

});



document.getElementById("noBtn").style.display="none";



document.getElementById("card").innerHTML=`

<h1 style="color:#4a148c;">Yessss, I love you so muchh mama! ❤️</h1>

<div class="sticker-box">

<img src="https://i.ibb.co/SDRDzBhN/IMG-0345.png">

</div>

`;

}
function showValentine(){

document.getElementById("page1").style.display = "none";

document.getElementById("page2").style.display = "block";

const song = document.getElementById("loveSong");

song.currentTime = 66;

song.play();

}