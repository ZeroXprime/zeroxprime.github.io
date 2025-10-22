function playAudio(){
var sounds = [
  "999-social-credit-siren.mp3",
    "applepay.mp3"
  
    ]
  var r = Math.floor(Math.random() * sounds.length)
  
  var a = new Audio(sounds[r])
  a.play()
}
