(function() {
  let word = "tyrannosaurus";
  let letter = "q";
  let count = word.split(letter).length-1;
  

  if (count > 0 ) {

    console.log("Yeah, the letter " + letter + " exists " + count + " times in my word");

  } else

    console.log ("Nope, that letter doesn't exist in my word");


})();
