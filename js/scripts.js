// ===== BACK END LOGIC ===== //

var count = function(number) {

}

// ===== FRONT END LOGIC ===== //

$(function() {
  $("#submit").click(function() {
    var numberInput = parseInt($("#numberInput").val());
    var result = count(numberInput);
    $("#result").text(result);
  });
});
