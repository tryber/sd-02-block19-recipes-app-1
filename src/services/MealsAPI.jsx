export function getMealsByName(name) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json()
      .then((data) => data));
}

export function getMealsByFirstLetter(letter) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealById(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getSingleRandomMeal() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsCategories() {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json()
      .then(({ categories }) => categories));
}

export function getMealsCategoriesList() {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsAreasList() {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsIngredientsList() {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsByMainIngredient(ingredient) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsByCategory(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

export function getMealsByArea(area) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => response.json()
      .then(({ meals }) => meals));
}

// para testar APIs:
// { getMealsByName('fish') }
// { getMealsByFirstLetter('a') }
// { getMealById(52921) }
// { getSingleRandomMeal() }
// { getMealsCategories() }
// { getMealsCategoriesList() }
// { getMealsAreasList() }
// { getMealsIngredientsList() }
// { getMealsByMainIngredient('chicken_breast') }
// { getMealsByCategory('Seafood') }
// { getMealsByArea('Canadian') }
