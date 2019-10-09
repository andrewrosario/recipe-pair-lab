import React, { Component } from 'react';

class Recipe extends Component {

    constructor (props) {
        console.log("Recipe props: ", props)
        super()
        this.state = { 
            name: props.thisRecipe.name,
            ingredients: props.thisRecipe.ingredients,
            steps: props.thisRecipe.steps,
            difficulty: props.thisRecipe.difficulty
        }
    }


    render() { 
        //console.log("Recipe props: ", this.props)

        const divStyle = {
            margin: '20px',
            border: '5px solid blue',
            padding: '10px'
        }

        return ( 
            <div style={divStyle}>
                Name: {this.state.name} <br></br>
                Ingredients: {this.state.ingredients}<br></br>
                Steps: {this.state.steps}<br></br>
                Difficulty: {this.state.difficulty}<br></br>
            </div>
         );
    }
}
 
export default Recipe;