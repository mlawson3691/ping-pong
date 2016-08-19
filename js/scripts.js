// ===== BACK END LOGIC ===== //

var count = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else {
      numbers.push(i);
    }
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
