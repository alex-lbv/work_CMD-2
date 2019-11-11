var testPoints = 5;

function num2str(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

function decrementPoints() {
  --testPoints;
}



function testResult() {
  if (testPoints == 0) {
    $('#res-6').removeClass('uk-hidden');
  } else if (testPoints == 1) {
    $('#res-5').removeClass('uk-hidden');
  } else if (testPoints == 2) {
    $('#res-4').removeClass('uk-hidden');
  } else if (testPoints == 3) {
    $('#res-3').removeClass('uk-hidden');
  } else if (testPoints == 4) {
    $('#res-2').removeClass('uk-hidden');
  } else if (testPoints == 5) {
    $('#res-1').removeClass('uk-hidden');
  }
  $('.your-points').html(testPoints);
  $('.your-point-word').html(num2str(testPoints, ['балл', 'балла', 'баллов']));
}