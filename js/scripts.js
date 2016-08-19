// ===== BACK END LOGIC ===== //

var count = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

// ===== USER INTERFACE LOGIC ===== //

$(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    var result = count(numberInput);
    $("#result").text(result);
  });
});
