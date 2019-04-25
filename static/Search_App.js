'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.
//import axios from 'axios'
var contentNode = document.getElementById("contents");
var YOUR_APP_KEY = '47bf3044e4da401ea23c827c1f66ac1d';
var YOUR_ID = '9444c6c1';

var Recipe = function (_React$Component) {
  _inherits(Recipe, _React$Component);

  function Recipe() {
    _classCallCheck(this, Recipe);

    return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).apply(this, arguments));
  }

  _createClass(Recipe, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'card', style: { width: 30 + '%',
            margin: 1.0 + 'rem' } },
        React.createElement(
          'div',
          null,
          React.createElement('img', { className: 'card-img-top', src: this.props.imageURL }),
          React.createElement(
            'div',
            { className: 'card-body' },
            React.createElement(
              'h3',
              { className: 'card-title' },
              this.props.name
            ),
            React.createElement(
              'p',
              { className: 'card-text' },
              React.createElement(
                'a',
                { href: this.props.sourceRecipeURL },
                'Source: ',
                this.props.source
              )
            ),
            React.createElement(
              'p',
              { className: 'card-text' },
              'Number of servings: ',
              this.props.numberOfServings
            ),
            React.createElement(
              'p',
              { className: 'card-text' },
              'Calories per serving: ',
              this.props.caloriesPerServing
            ),
            React.createElement(
              'p',
              { className: 'card-text' },
              'Time to prepare: ',
              this.props.totalTime
            ),
            React.createElement(
              'p',
              { className: 'card-text' },
              'Ingredients:'
            ),
            React.createElement(
              'ul',
              { className: 'card-text' },
              this.props.ingredients.map(function (recipe, i) {
                return React.createElement(
                  'li',
                  { key: i + _this2.props },
                  recipe
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Recipe;
}(React.Component);

var CardList = function CardList(_ref) {
  var recipes = _ref.recipes;

  var cardsArray = recipes.map(function (recipe) {
    return React.createElement(Recipe, { key: recipe.id,
      id: recipe.id,
      name: recipe.name,
      source: recipe.source,
      imageURL: recipe.imageURL,
      numberOfServings: recipe.numberOfServings,
      sourceRecipeURL: recipe.sourceRecipeURL,
      totalTime: recipe.totalTime,
      caloriesPerServing: recipe.caloriesPerServing,
      ingredients: recipe.ingredients });
  });

  return React.createElement(
    'div',
    { className: 'bricklayer' },
    cardsArray
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
  ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this3.state = {
      value: '',
      searchResult: []
    };
    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'createRecipe',
    value: function createRecipe(newRecipe) {
      var newRecipes = this.state.searchResult.slice();
      newRecipe.id = this.state.searchResult.length + 1;
      newRecipes.push(newRecipe);
      this.setState({ searchResult: newRecipes });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this4 = this;

      this.setState({ searchResult: [] });
      event.preventDefault();
      var query = encodeURI(this.state.value);
      fetch('https://api.edamam.com/search?q=' + query + '&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d').then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        if (resp.count) {
          resp.hits.forEach(function (hit) {
            _this4.createRecipe({
              name: hit.recipe.label,
              source: hit.recipe.source,
              numberOfServings: hit.recipe.yield,
              imageURL: hit.recipe.image,
              sourceRecipeURL: hit.recipe.url,
              totalTime: hit.recipe.totalTime,
              caloriesPerServing: hit.recipe.calories,
              ingredients: hit.recipe.ingredientLines });
          });
        }
      }).catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                  'label',
                  { htmlFor: 'search-bar' },
                  'Input Ingredients:'
                ),
                React.createElement('input', { id: 'search-bar', type: 'text', className: 'form-control', value: this.state.value, onChange: this.handleChange, placeholder: 'Enter Ingredients' })
              ),
              React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                  'button',
                  { type: 'submit', className: 'btn btn-primary' },
                  'Submit'
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(CardList, { recipes: this.state.searchResult })
        )
      );
    }
  }]);

  return App;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(App, null), contentNode);