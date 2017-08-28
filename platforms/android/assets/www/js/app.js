
var i =0
if(i <=6)
       {

           function getRandomIntInclusive(min, max) {
         min = Math.ceil(0);
         max = Math.floor(45);
         i++
         return Math.floor(Math.random() * (max - min +1)) + min;

     }
}

else {
    alert("jouer comporte des risque")
}

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("inject").innerHTML = getRandomIntInclusive();

});
