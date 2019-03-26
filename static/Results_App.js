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
          React.createElement(
            "p",
            null,
            "insert image here>"
          ),
          React.createElement(
            "p",
            null,
            "Description:",
            React.createElement("br", null),
            this.props.desc
          ),
          React.createElement(
            "p",
            null,
            "Date Submitted: ",
            this.props.date
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
  desc: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

var CardList = function CardList(_ref) {
  var recipes = _ref.recipes;

  var cardsArray = recipes.map(function (recipe) {
    return React.createElement(Recipe, { key: recipe.id,
      id: recipe.id,
      name: recipe.name,
      desc: recipe.desc,
      date: recipe.date });
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

var recipes = [{ id: 0, name: "chicken", date: "2018", desc: "Yum yum" }, { id: 1, name: "Steak", date: "2015", desc: "Medium Rare" }, { id: 2, name: "Pasta", date: "1990", desc: "Italian" }];

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      Recipes: recipes
    };
    _this2.createTestRecipe = _this2.createTestRecipe.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
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
        name: 'New Recipe', desc: 'Pizza',
        date: '2019' });
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