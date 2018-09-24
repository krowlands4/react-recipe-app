import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "pasta.jpg"
      },
      {
        title: "Green Smoothie",
        instructions: "Combine in a blender and blend until creamy.",
        ingredients: ["1 Banana", "1/2 cup of Baby Spinach", "1/2 cup of Kale", "3oz Filter Water"],
        img: "smoothie.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "toast.jpg"
      }
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={index} {...r} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  
  }
}

export default RecipeList;