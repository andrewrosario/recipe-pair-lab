import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        ingredients: '',
        steps: '',
        difficulty: ''
     }

     setName = (event) => {
         console.log(this.state)
         this.setState({
             name: event.target.value
         })
     }

     setIngredients = (event) => {
        console.log(this.state)
        this.setState({
            ingredients: event.target.value
        })
    }

    setSteps = (event) => {
        console.log(this.state)
        this.setState({
            steps: event.target.value
        })
    }

    setDifficulty = (event) => {
        console.log(this.state)
        this.setState({
            difficulty: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newRecipe = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            steps: this.state.steps,
            difficulty: this.state.difficulty
        }
        this.props.getNewRecipe(newRecipe)
      }
 

    render() { 
        return ( 
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Recipe Maker</h1><br></br>
                Name <input type='text' value={this.state.name} onChange={(e) => this.setName(e)}></input><br></br><br></br>

                Ingredients: <textarea type='textarea' value={this.state.ingredients} onChange={(e) => this.setIngredients(e)}></textarea><br></br><br></br>

                Steps: <textarea value={this.state.steps} onChange={(e) => this.setSteps(e)}></textarea><br></br><br></br>

                Difficult: 
                    <select onChange={(e) => this.setDifficulty(e)}>
                        <option value='Easy'>Easy</option>
                        <option value='Medium'>Medium</option>
                        <option value='Hard'>Hard</option>
                    </select><br></br><br></br>

                    <input type="submit"/>
            </form>
         );
    }
}
 
export default Form;