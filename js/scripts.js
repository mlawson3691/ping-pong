// ===== BACK END LOGIC ===== //

var count = function(number) {
  var numbers = [];
  var value = "";
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      value += "ping";
      if (i % 5 === 0) {
        value += "-pong";
      }
    } else if (i % 5 === 0) {
      value += "pong";
    } else {
      value += i;
    }
    numbers.push("<li>" + value + "</li>");
    value = "";
  }
  return numbers;
}

// ===== USER INTERFACE LOGIC ===== //

$(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#numberInput").val());
    $("#result").empty();
    $("#numberInput").val("");
    $(".alert").hide();
    if (!isNaN(numberInput) && numberInput > 0) {
      var result = count(numberInput);
      for (var i = 0; i < result.length; i++) {
        $("#result").append(result[i]);
      }
    } else {
      $(".alert").show();
    }
  });
});
