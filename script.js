function playAudio(){
var sounds = [
  "999-social-credit-siren.mp3",
    "applepay.mp3"
  
    ]
  var r = Math.floor(Math.random() * sounds.length)
  
  var a = new Audio(sounds[r])
  a.play()
}
var c = document.getElementById("bob")

var hight_limeted = 250
var hight = 200
var gravity = 5
var yspeed = 67
var jumppower = 67

function jump() {
  yspeed -= gravity;
  if (hight <= 0){
    yspeed = 0
  }
  hight += yspeed;
  
  
  c.style.marginTop = hight.toString();
}

function boost() {
  hight = 10;
  yspeed = 100;
}



setInterval(jump, 33)
document.addEventListener('keydown', function(event){
  yspeed = 100;
})
