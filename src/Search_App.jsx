// This grabs the DOM element to be used to mount React components.
//import axios from 'axios'
var contentNode = document.getElementById("contents");
const YOUR_APP_KEY = '47bf3044e4da401ea23c827c1f66ac1d'
const YOUR_ID = '9444c6c1'

class Recipe extends React.Component {

  render() {
    return (
      <div className="card" style={{width: 30 + '%', 
      margin: 1.0+'rem'}}>
        <div>
          <img className="card-img-top"src={this.props.imageURL}></img>
          <div className="card-body">
          <h3 className="card-title">{this.props.name}</h3>          
          <p className="card-text"><a href={this.props.sourceRecipeURL}>Source: {this.props.source}</a></p>
          <p className="card-text">Number of servings: {this.props.numberOfServings}</p>
          <p className="card-text">Calories per serving: {this.props.caloriesPerServing}</p>
          <p className="card-text">Time to prepare: {this.props.totalTime}</p>
          <p className="card-text">Ingredients:</p>
          <ul className="card-text">
            {this.props.ingredients.map((recipe, i) => <li key={i + this.props}>{recipe}</li>)}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

const CardList = ({ recipes }) => {
  const cardsArray = recipes.map(recipe => (
    <Recipe key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      source={recipe.source}
      imageURL={recipe.imageURL}
      numberOfServings = {recipe.numberOfServings}
      sourceRecipeURL={recipe.sourceRecipeURL}
      totalTime={recipe.totalTime}
      caloriesPerServing={recipe.caloriesPerServing}
      ingredients={recipe.ingredients}/>
  ));
  
  return (
    <div className='bricklayer'>
      {cardsArray}
    </div>
  );
};

CardList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

Recipe.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  imageURL: React.PropTypes.string.isRequired,
  source: React.PropTypes.string.isRequired,
  numberOfServings: React.PropTypes.number.isRequired,
  sourceRecipeURL: React.PropTypes.string.isRequired,
  totalTime: React.PropTypes.number.isRequired,
  caloriesPerServing: React.PropTypes.number.isRequired, 
  ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

class App extends React.Component {
  constructor(){
    super();
  this.state = { 
    value: '',
    searchResult: [],
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  createRecipe(newRecipe) {
    const newRecipes = this.state.searchResult.slice();
    newRecipe.id = this.state.searchResult.length + 1;
    newRecipes.push(newRecipe);
    this.setState({ searchResult: newRecipes }); 
}

  handleSubmit(event) {
    this.setState({ searchResult: [] }); 
    event.preventDefault();
    let query = encodeURI(this.state.value)
    fetch(`https://api.edamam.com/search?q=${query}&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d`)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.count){
        resp.hits.forEach(hit => {
          this.createRecipe({
            name: hit.recipe.label, 
            source: hit.recipe.source, 
            numberOfServings: hit.recipe.yield,
            imageURL: hit.recipe.image,
            sourceRecipeURL: hit.recipe.url,
            totalTime: hit.recipe.totalTime,
            caloriesPerServing: hit.recipe.calories,
            ingredients: hit.recipe.ingredientLines});  
        })
      }
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className = "row">
                <label htmlFor="search-bar">Input Ingredients:</label>
                <input id="search-bar" type="text" className = "form-control" value={this.state.value} onChange={this.handleChange} placeholder="Enter Ingredients"/>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <CardList recipes={this.state.searchResult}/>
        </div>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<App />, contentNode);
