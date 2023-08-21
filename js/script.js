function navigateToRandomCategory() {
  var categoryShortNames = ["Lunch", "Dinner", "Sushi", "Beverages"]; // Add your menu categories here
  var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
  var randomCategoryShortName = categoryShortNames[randomIndex];

  // Replace the following line with your custom navigation logic
  window.location.href = "menu-item.html?category=" + randomCategoryShortName;
}
