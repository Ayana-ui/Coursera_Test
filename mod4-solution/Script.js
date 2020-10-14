
(function(window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i=0; i<names.length; i++) {
      var n = names[i];
      var c = names[i].charAt(0);
      var firstLetter = c.toLowerCase();
      if (c==='J'||firstLetter==='j') {
           byeSpeaker.speak(n);
      } else {

           helloSpeaker.speak(n);
      }
    }
})(window);