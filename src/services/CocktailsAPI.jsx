export function getCocktailsByName(name) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export function getCocktailsByFirstLetter(letter) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export function getIngredientDetailsByName(ingredient) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
    .then((response) => response.json()
      .then(({ ingredients }) => ingredients));
}

export function getCocktailById(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export function getIngredientDetailsById(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`)
    .then((response) => response.json()
      .then(({ ingredients }) => ingredients));
}

export function getRandomCocktail() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export const getCocktailsByIngredient = (ingredient) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
    .catch((error) => error)
);

export function getCocktailsByType(type) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`)
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export function getCocktailsByCategory(category) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export function getCocktailsCategoriesList() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}

export const getCocktailsIngredientsList = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then(({ drinks }) => drinks.map(({ strIngredient1 }) => strIngredient1))
    .catch((error) => error)
);

export function getCocktailsTypeList() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json()
      .then(({ drinks }) => drinks));
}


// para testar APIs:
// { getCocktailsByName('margarita') }
// { getCocktailsByFirstLetter('a') }
// { getIngredientDetailsByName('vodka') }
// { getCocktailById(11007) }
// { getIngredientDetailsById(552) }
// { getRandomCocktail() }
// { getCocktailsByIngredient('Gin') }
// { getCocktailsByType('Alcoholic') }
// { getCocktailsByCategory('Ordinary_Drink') }
// { getCocktailsCategoriesList() }
// { getCocktailsIngredientsList() }
// { getCocktailsTypeList() }
