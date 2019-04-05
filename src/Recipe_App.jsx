// This is a place holder for the initial application state.

const recipeDesc = [
    {text: "chikcne and cheese", Calories: "$499", vitamins: true, nutrients: "carbs"},
];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipeDesc
    };
  }

  addRecipeToList() {
    alert('You added a recipe!')
  }

  render() {
    return (
      <div>
        <h1>My View 03</h1>
        <RecipeImage />
        <hr />
        <RecipeDescription />
        <hr />
        <button onClick={this.addRecipeToList}>Add To List</button> 
        
        <div>


        </div>

      </div>
    );
  }
}

class RecipeImage extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the Image of the Recipe.</div>
) }
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the description of the image.</div>
) }
}


// This renders the JSX component inside the content node:
ReactDOM.render(<Recipe />, contentNode);
