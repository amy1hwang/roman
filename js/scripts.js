var romanFunction = function(num) {
  if (isNaN(parseInt(num))) {
    return "Enter a number"
  } else {
    var result = "";
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV","I"];
    for (var i = 0;i <= decimal.length;i++) {
      while (num%decimal[i] < num) {
        result += roman[i];
        num -= decimal [i];
      };
    };
    return result;
  };
};

//4, 9 IV IX
//1-3 is a group of I's
//5-8 a combo of V, I

$(document).ready(function() {
  $("form#roman").submit(function(event){
    event.preventDefault();
    var num = ($("#input").val());
    $(".output").text(romanFunction(num));
  });
});
