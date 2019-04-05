"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var contentNode = document.getElementById("contents");

var Recipe = function (_React$Component) {
  _inherits(Recipe, _React$Component);

  function Recipe() {
    _classCallCheck(this, Recipe);

    return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).apply(this, arguments));
  }

  _createClass(Recipe, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            this.props.name
          ),
          React.createElement("img", { width: "400px", src: this.props.imageURL }),
          React.createElement(
            "p",
            null,
            "Description:",
            React.createElement("br", null),
            this.props.description
          ),
          React.createElement(
            "p",
            null,
            "Number of servings: ",
            this.props.numberOfServings
          ),
          React.createElement(
            "p",
            null,
            "Time to prepare: ",
            this.props.totalTime
          ),
          React.createElement(
            "p",
            null,
            "Source URL: ",
            this.props.sourceRecipeURL
          ),
          React.createElement(
            "p",
            null,
            "Rating: ",
            this.props.rating
          )
        )
      );
    }
  }]);

  return Recipe;
}(React.Component);

Recipe.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  imageURL: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  numberOfServings: React.PropTypes.number.isRequired,
  sourceRecipeURL: React.PropTypes.string.isRequired,
  totalTime: React.PropTypes.number.isRequired,
  rating: React.PropTypes.number.isRequired
};

var CardList = function CardList(_ref) {
  var recipes = _ref.recipes;

  var cardsArray = recipes.map(function (recipe) {
    return React.createElement(Recipe, { key: recipe.id,
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      imageURL: recipe.imageURL,
      numberOfServings: recipe.numberOfServings,
      sourceRecipeURL: recipe.sourceRecipeURL,
      totalTime: recipe.totalTime,
      rating: recipe.rating });
  });

  return React.createElement(
    "div",
    null,
    cardsArray
  );
};

CardList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      Recipes: []
    };
    _this2.createTestRecipe = _this2.createTestRecipe.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      fetch('/api/recipes').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Total count of records:", data._metadata.total_count);
            _this3.setState({ Recipes: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch recipes:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: "createRecipe",
    value: function createRecipe(newRecipe) {
      var newRecipes = this.state.Recipes.slice();
      newRecipe.id = this.state.Recipes.length + 1;
      newRecipes.push(newRecipe);
      this.setState({ Recipes: newRecipes });
    }
  }, {
    key: "createTestRecipe",
    value: function createTestRecipe() {
      this.createRecipe({
        name: 'Pizza Pie',
        description: 'È italiano, amico mio',
        date: '2019',
        numberOfServings: 8,
        imageURL: 'https://www.seriouseats.com/assets_c/2015/01/20150127-san-francisco-pizza-by-the-slice-pizza-shop-thumb-1500xauto-418467.jpg',
        sourceRecipeURL: 'https://google.com',
        totalTime: 25,
        rating: 4 });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Recipe List View"
        ),
        React.createElement(CardList, { recipes: this.state.Recipes }),
        React.createElement(
          "button",
          { onClick: this.createTestRecipe },
          "Add"
        )
      );
    }
  }]);

  return App;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(
  "div",
  { className: "container" },
  React.createElement(App, null)
), contentNode);

// ReactDOM.render(
//   <addButton/>, document.getElementById("contents")
// );