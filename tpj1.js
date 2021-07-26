//1.a-changez le input "text" en input "password"
document.getElementById("username").type = "password";


//1.b-changez le input "password" en input "text"
document.getElementById("password").type = "text";

//Question 2
document.querySelector(".warning").style.color = "red";
document.querySelector(".warning>a").style.color = "yellow";
document.querySelector(".warning>a").style.textDecoration = "none";

//Question 3
document.getElementById("bloc2").innerHTML = "Nouveau contenu pour ce bloc";

//Question 4
var inserer = document.createElement("p");
var signature = document.createTextNode("TIOMELA Raissa");
inserer.appendChild(signature);
document.getElementById("global").appendChild(inserer);

//Show or hide the password
var eye = document.getElementById("eye");
var pass = document.getElementById("password");
var aspect = false;

function changer(){
    if(aspect){
        pass.setAttribute("type", "password");
        eye.style.color = "#7a797e";
        aspect = false;
    }
    else{
        pass.setAttribute("type", "text");
        eye.style.color = "#5887ef";
        aspect = true;
    }
}

eye.addEventListener("click", changer);