function openDua(name){

if(name==="kumayl"){
alert("Dua Kumayl Content Here");
}

if(name==="tawassul"){
alert("Dua Tawassul Content Here");
}

if(name==="ahad"){
alert("Dua Ahad Content Here");
}

}
function checkQuiz(){

let score = 0;

let q1 = document.querySelector('input[name="q1"]:checked');

if(q1 && q1.value=="1"){
score++;
}

document.getElementById("result").innerHTML =
"Your Score: " + score + "/1";

}
const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
}
