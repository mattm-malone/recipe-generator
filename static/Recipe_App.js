"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var recipeDesc = [{ text: "chikcne and cheese", Calories: "$499", vitamins: true, nutrients: "carbs" }];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Recipe = function (_React$Component) {
  _inherits(Recipe, _React$Component);

  function Recipe() {
    _classCallCheck(this, Recipe);

    return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this));
  }

  _createClass(Recipe, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My View 03"
        ),
        React.createElement(RecipeImage, null),
        React.createElement("hr", null),
        React.createElement(RecipeDescription, null),
        React.createElement("hr", null)
      );
    }
  }]);

  return Recipe;
}(React.Component);

var RecipeImage = function (_React$Component2) {
  _inherits(RecipeImage, _React$Component2);

  function RecipeImage() {
    _classCallCheck(this, RecipeImage);

    return _possibleConstructorReturn(this, (RecipeImage.__proto__ || Object.getPrototypeOf(RecipeImage)).apply(this, arguments));
  }

  _createClass(RecipeImage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "This is a placeholder for the Image of the Recipe."
      );
    }
  }]);

  return RecipeImage;
}(React.Component);

var RecipeDescription = function (_React$Component3) {
  _inherits(RecipeDescription, _React$Component3);

  function RecipeDescription() {
    _classCallCheck(this, RecipeDescription);

    return _possibleConstructorReturn(this, (RecipeDescription.__proto__ || Object.getPrototypeOf(RecipeDescription)).apply(this, arguments));
  }

  _createClass(RecipeDescription, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "This is a placeholder for the description of the image."
      );
    }
  }]);

  return RecipeDescription;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Recipe, null), contentNode);