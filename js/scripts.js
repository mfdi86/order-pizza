//Back-End Logic:
function Pizza(size, toppingsArray) {
  this.size = size;
  this.toppings = toppingsArray;
}

Pizza.prototype.getPrice = function() {
  var price = 10;
  if (this.size === "medium") {
    price += 2;
  }
  if (this.size === "large") {
    price += 4;
  }
  if (this.size === "extra-large") {
    price += 6;
  }
  for (i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "meat") {
      price += 2;
    }
    if (this.toppings[i] === "veggie") {
      price += 1;

    }
  }

return price;

};
//Front-End Logic:

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var toppingsArray = [];
    var inputtedSize = $("input[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    var newPizza = new Pizza(inputtedSize, toppingsArray);
    console.log(newPizza);


    $("#output").text("Your total is: $" + newPizza.getPrice() + ".00");
    event.preventDefault();
  });
});
