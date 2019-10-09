import React from 'react';
import Form from './Form.js'
import Recipe from './Recipe.js';


class App extends React.Component {
  state = {
    //recipes: [ {name: 'Test', ingredients: 'test', steps: 'test', difficulty: 'test'} ]
    recipes: []
  }

getNewRecipe = (recipe) => {
  console.log("New Recipe: ", recipe)
  console.log("length: ", this.state.recipes.length)
  //if (this.state.recipes.length !== 0) {
    this.setState( {recipes: [...this.state.recipes, recipe] } ) 
  //}
  //console.log("Current State: ",this.state)
}

createRecipeCards = () => {
  const recipeMap = this.state.recipes.map( (recipe, index) => <Recipe thisIndex={index} thisRecipe={recipe}/> )
  //console.log("Map fxn: ", recipeMap)
  return recipeMap
}

  render () {
    return (
      <div className="App">
        <Form getNewRecipe={this.getNewRecipe} />
        {this.createRecipeCards()}
      </div>
    )
  }
}

export default App;
