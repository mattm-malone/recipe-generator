// This is a place holder for the initial application state.
var idNum = 3;

var contentNode = document.getElementById("contents");

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <h2>{this.props.name}</h2>
          <p>insert image here></p>
          <p>Description:<br></br>{this.props.desc}</p>
          <p>Date Submitted: {this.props.date}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

const CardList = ({ recipes }) => {
  const cardsArray = recipes.map(recipe => (
    <Card key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      desc={recipe.desc}
      date={recipe.date} />
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

var recipes = [{id:0,name:"chicken",date:"2018",desc:"Yum yum"},
{id:1,name:"Steak",date:"2015",desc:"Medium Rare"},
{id:2,name:"Pasta",date:"1990",desc:"Italian"}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recipes: recipes,
    };
    this.createTestRecipe = this.createTestRecipe.bind(this);
  }

  createRecipe(newRecipe) {
    const newRecipes = this.state.Recipes.slice();
    newRecipe.id = this.state.Recipes.length + 1;
    newRecipes.push(newRecipe);
    this.setState({ Recipes: newRecipes }); 
     
  }

  createTestRecipe() {
    this.createRecipe({
      name: 'New Recipe', desc: 'Pizza', 
      date: '2019'});  
  }

  render() {
    return (
      <div>
        <h1>Recipe List View</h1>
        <CardList recipes={this.state.Recipes} />
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