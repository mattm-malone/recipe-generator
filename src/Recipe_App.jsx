// This is a place holder for the initial application state.
const recipeDesc = [

    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>My View 03</h1>
        <RecipeImage />
        <hr />
        <RecipeDescription />
        <hr />
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
ReactDOM.render(<MyComponent />, contentNode);
