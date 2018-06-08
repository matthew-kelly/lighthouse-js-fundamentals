var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}
console.log("--------------------");
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("--------------------");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var tally = ingredients.length - 1;
while (tally >= 0) {
  console.log(ingredients[tally]);
  tally--;
}