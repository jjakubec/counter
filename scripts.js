clicked = 0;
$( ".input1" ).click(function () {
    clicked++;
    $( ".increased" ).text(clicked);
  });
  $( ".input2" ).click(function () {
    clicked--;
    $( ".decreased" ).text(clicked);
  });