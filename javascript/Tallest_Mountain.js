(function() {
  //tallest mountain list
  let mountainHeight = ['28169',
  '27940',
  '27838',
  '26864',
  '26795',
  '26781',
  '26660',
  '26545',
  '29029',
  '26509',
  '26414',
  '26362'];

  let largestMountain = Math.max.apply(Math, mountainHeight);

  console.log(largestMountain);

})();
