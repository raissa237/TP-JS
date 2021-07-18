//1.a-changez le input "text" en input "password"
document.querySelector("input").type = "password";


//1.b-changez le input "password" en input "text"
document.querySelector("input").type = "text";

//Question 2
document.querySelector(".warning").style.color = "red";
document.querySelector("a").style.color = "yellow";
document.querySelector("a").style.textDecoration = "none";

//Question 3
document.getElementById("bloc2").innerHTML = "Nouveau contenu pour ce bloc";

//Question 4
var inserer = document.createElement("p");
var signature = document.createTextNode("TIOMELA Raissa");
inserer.appendChild(signature);
document.getElementById("global").appendChild(inserer);