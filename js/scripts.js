//Back-End Logic:
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Pizza.prototype.getPrice = function()
    var price = 10;
//
return price;

//Front-End Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedToppings = $("input[name=toppings]:checked").val();


    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#output").text("Your total cost is: $" + newPizza.getPrice() + ".00");

    event.preventDefault();
  });
});
