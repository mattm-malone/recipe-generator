import React from 'react';
import 'isomorphic-fetch';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// import { Link } from 'react-router';

class Recipe extends React.Component {

  render() {
    return (
      <Card style={{width: '25em'}}>
        <Card.Img variant="top" src={this.props.imageURL}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><a href={this.props.sourceRecipeURL}>{this.props.source}</a></Card.Subtitle>    
          <Card.Text>Number of servings: {this.props.numberOfServings}</Card.Text>
          <Card.Text>Calories per serving: {this.props.caloriesPerServing}</Card.Text>
          <Card.Text>Time to prepare: {this.props.totalTime}</Card.Text>
          <Card.Text>Ingredients:</Card.Text>
          <ul className="card-text">
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

export default class Search extends React.Component {
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
    newRecipe.caloriesPerServing = newRecipe.caloriesPerServing/newRecipe.numberOfServings;
    newRecipe.id = this.state.searchResult.length + 1;
    newRecipes.push(newRecipe);
    this.setState({ searchResult: newRecipes }); 
}

  handleSubmit(event) {
    this.setState({ searchResult: [] }); 
    event.preventDefault();
    let query = encodeURI(this.state.value)
    fetch(`https://api.edamam.com/search?q=${this.state.value}&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d`)
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <input id="search-bar" type="text" className = "form-control" value={this.state.value} onChange={this.handleChange} placeholder="Enter Ingredients"/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col className="text-center">
                <Button type="submit" variant="light" size="lg">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        <div className="row">
          <CardList recipes={this.state.searchResult}/>
        </div>
      </div>
    );
  }
}
