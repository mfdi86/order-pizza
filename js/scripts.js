//Back-End Logic:
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

function Toppings(meat, veggie) {
  this.meat = 2;
  this.veggie = 1;
}

Pizza.prototype.getPrice = function() {
    var price = 10;
  if (this.size === "medium"); {
    price += 2;
  }
  if (this.size === "large");  {
    price += 4;
  }
  if (this.size === "extra-large");  {
    price += 6;
  }
  if (this.toppings === "meat"); {
    price += 2;
  }
  if (this.toppings === "veggies"); {
    price += 1;
  }
return price;

}
//Front-End Logic:

$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var inputtedSize = $(this.size("input[name=size]:checked")).val();
    var inputtedMeat = $(this.toppings("input[name=meat]:checked")).val();
    var inputtedVeggies = $(this.toppings("input[name=veggie]:checked")).val();
    //var inputtedToppings = $("input[name=toppings]:checked").val();
    //var inputtedToppings = $(this).val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    var newToppings = new Toppings(inPuttedMeat, inputtedVeggies);

    $("#output").text("Your total cost is: $" + newPizza.getPrice() + ".00");
    event.preventDefault();
  });
});
