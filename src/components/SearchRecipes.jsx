import React, { Component } from 'react';
import { getMealsByName } from '../services/MealsAPI';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: ['a'],
    };
  }

  componentDidMount() {
    this.getMeals();
  }

  getMeals() {
    this.setState({ meal: getMealsByName('fish') });
  }

  render() {
    const { meal } = this.state;
    console.log(meal);
    return (
      <div>
        {/* {meal.length && meal.map(({ strMeal }) => <li>{strMeal}</li>)} */}
        lalal
      </div>
    );
  }
}

export default SearchRecipes;
