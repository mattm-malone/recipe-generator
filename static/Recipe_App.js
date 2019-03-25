"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var recipeDesc = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
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

  return MyComponent;
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


ReactDOM.render(React.createElement(MyComponent, null), contentNode);