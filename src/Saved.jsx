import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom';

// This is a place holder for the initial application state.
var contentNode = document.getElementById("contents");

class Recipe extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Card bg='light' style={{width: '220px'}}>
        <Card.Img variant='top' src={this.props.imageURL}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'><a href={this.props.sourceRecipeURL}>{this.props.source}</a></Card.Subtitle>    
          <Card.Text>Number of servings: {this.props.numberOfServings}</Card.Text>
          <Card.Text>Calories per serving: {this.props.caloriesPerServing}</Card.Text>
          <Card.Text>Time to prepare: {this.props.totalTime}</Card.Text>
          <Card.Text>Ingredients:</Card.Text>
          <ul className='card-text'>
            {this.props.ingredients.map((recipe, i) => <li key={i + this.props.name}>{recipe}</li>)}
          </ul>
        </Card.Body>
      </Card>
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
    <CardColumns>
      {cardsArray}
    </CardColumns>
  );
};

CardList.propTypes = {
  recipes: PropTypes.array.isRequired
};

Recipe.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  numberOfServings: PropTypes.number.isRequired,
  sourceRecipeURL: PropTypes.string.isRequired,
  totalTime: PropTypes.number.isRequired,
  caloriesPerServing: PropTypes.number.isRequired, 
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default class Saved_Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/recipes').then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Total count of records:", data._metadata.total_count);
          this.setState({ savedRecipes: data.records });
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

  render() {
    return (
    <Container>
      <Row style={{marginTop: '2rem'}}>
        <h2>Saved Recipes</h2>
      </Row>
      <Row style={{marginTop: '0.5rem'}}>
        <Link to='/'>Home</Link>
      </Row>
      <Row style={{marginTop: '2rem'}}>
        <CardList recipes={this.state.savedRecipes}/>
      </Row>
    </Container>
    );
  }
}


// ReactDOM.render(
//   <addButton/>, document.getElementById("contents")
// );