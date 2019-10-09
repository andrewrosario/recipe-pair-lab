import React from 'react';
import Form from './Form.js'
import Recipe from './Recipe.js';


class App extends React.Component {
  state = {
    recipes: []
  }

getNewRecipe = (recipe) => {
  console.log(recipe)
}

  render () {
    return (
      <div className="App">
        <Form getNewRecipe={this.getNewRecipe} />
      </div>
    )
  }
}

export default App;
