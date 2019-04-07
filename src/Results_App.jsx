
// This is a place holder for the initial application state.
var contentNode = document.getElementById("contents");

class Recipe extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <h2>{this.props.name}</h2>
          <img width='400px' src={this.props.imageURL}></img>
          <p>Description:<br></br>{this.props.description}</p>
          <p>Number of servings: {this.props.numberOfServings}</p>
          <p>Time to prepare: {this.props.totalTime}</p>
          <p>Source URL: {this.props.sourceRecipeURL}</p>
          <p>Rating: {this.props.rating}</p>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  imageURL: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  numberOfServings: React.PropTypes.number.isRequired,
  sourceRecipeURL : React.PropTypes.string.isRequired,
  totalTime: React.PropTypes.number.isRequired,
  rating: React.PropTypes.number.isRequired
};

const CardList = ({ recipes }) => {
  const cardsArray = recipes.map(recipe => (
    <Recipe key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      description={recipe.description}
      imageURL={recipe.imageURL}
      numberOfServings = {recipe.numberOfServings}
      sourceRecipeURL={recipe.sourceRecipeURL}
      totalTime={recipe.totalTime}
      rating={recipe.rating}/>
  ));
  
  return (
    <div>
      {cardsArray}
    </div>
  );
};

CardList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
    };
    this.createTestRecipe = this.createTestRecipe.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/recipes').then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Total count of records:", data._metadata.total_count);
          this.setState({ recipeList: data.records });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch recipes:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  createRecipe(newRecipe) {
    newRecipe.id = this.state.recipeList.length + 1;
    
    fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
      .then(res => {
        if (res.ok) {
          res.json()
              const newRecipes = this.state.recipeList.concat(newRecipe);
              this.setState({ recipeList: newRecipes });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add recipe: ' + error.message);
            });
        }
      });
   }

  createTestRecipe() {
    this.createRecipe({
      name: 'Pizza Pie', 
      description: 'È italiano, amico mio', 
      date: '2019',
      numberOfServings: 8,
      imageURL: 'https://www.seriouseats.com/assets_c/2015/01/20150127-san-francisco-pizza-by-the-slice-pizza-shop-thumb-1500xauto-418467.jpg',
      sourceRecipeURL: 'https://google.com',
      totalTime: 25,
      rating:4});  
  }

  render() {
    return (
      <div>
        <h1>Recipe List View</h1>
        <CardList recipes={this.state.recipeList}/>
        <button onClick={this.createTestRecipe}>Add</button> 
      </div>
    );
  }
}


// This renders the JSX component inside the content node:
ReactDOM.render(
  <div className='container'>
  <App/>
  </div>,contentNode
)

// ReactDOM.render(
//   <addButton/>, document.getElementById("contents")
// );