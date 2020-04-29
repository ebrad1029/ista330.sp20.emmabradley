function answer(){
  var q1 = document.quiz.q1.value;
  var correct = 0;
        if (q1 == 'Elephant') {
      correct++;
    }
  document.getElementByID('after_submit').style.visibiltiy='visible';
  document.getElementByID('number_correct').innerHTML = "you got " + correct +
    ' correct.';




}
