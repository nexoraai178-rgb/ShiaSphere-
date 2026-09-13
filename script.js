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