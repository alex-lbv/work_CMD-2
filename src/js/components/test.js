var testPoints = 5;

function decrementPoints() {
  --testPoints;
}

function testResult() {
  if (testPoints >= 0 && testPoints <= 3) {
    $('#res-3').removeClass('uk-hidden');
  } else if (testPoints > 3 && testPoints <= 4) {
    $('#res-2').removeClass('uk-hidden');
  } else if (testPoints == 5) {
    $('#res-1').removeClass('uk-hidden');
  }
  $('.your-points').html(testPoints);
}