(function() {
  let palindromes = "bob";
  let splitPalindromes = palindromes.split("");
  let reversePalindromes = splitPalindromes.reverse();
  let joinPalindromes = reversePalindromes.join("");

  if (palindromes == joinPalindromes) {
    console.log("True");
  } else {
    console.log("False");
  }

})();
