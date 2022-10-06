var randomNumber1 = Math.floor (Math.random() *6) +1 ; //  1 - 6 random number from maths 
var randomDice = "dice" + randomNumber1 + ".png"; // 1 - 6 random dice from concatination
var randomImageSource = "images/" + randomDice ; // 1-6 source changed using concatination
var image1 = document.querySelectorAll("img")[0]; // selecting the source of image using dom manupelation 
image1.setAttribute("src" , randomImageSource);




var randomNumber2 = Math.floor (Math.random() *6) +1 ; //  1 - 6 random number from maths 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png" // concatinating the fake random image which is going to tale the real dice place 
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);




if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player1 wins🚩";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}