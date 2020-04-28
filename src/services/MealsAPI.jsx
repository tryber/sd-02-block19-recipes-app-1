const simpleGetAnything = (API) => (
  fetch(API)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))));

const getSingleRandomMeal = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))));

const getMealsByName = (name) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json()
      .then(({ meals }) => meals)));

const getMealsIngredientsList = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then(({ meals }) => meals.map(({ strIngredient }) => strIngredient))
    .catch((error) => error)
);

// function getMealsByFirstLetter(letter) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }

// function getMealById(id) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }

// function getMealsCategories() {
//   fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then((response) => response.json()
//       .then(({ categories }) => categories))
// }

// function getMealsCategoriesList() {
//   fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }

// function getMealsAreasList() {
//   fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }


const getMealsByMainIngredient = (ingredient) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then(({ meals }) => meals)
    .catch((error) => error)
);

// function getMealsByCategory(category) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }

// function getMealsByArea(area) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
//     .then((response) => response.json()
//       .then(({ meals }) => meals))
// }

export {
  simpleGetAnything,
  getSingleRandomMeal,
  getMealsByName,
  getMealsIngredientsList,
  getMealsByMainIngredient,
};
