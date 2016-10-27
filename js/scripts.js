var romanFunction = function(num) {
  var result = "";
  var decimal = [1000, 500, 100, 50, 10, 5, 1];
  var roman = ["M", "D", "C", "L", "X", "V", "I"];
  for (var i = 0;i <= decimal.length;i++) {
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal [i];
    }
  }
  return result;
}

//4, 9 IV IX
//1-3 is a group of I's
//5-8 a combo of V, I

$(document).ready(function() {
  $("form#roman").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    console.log(romanFunction(input));
  });
});
