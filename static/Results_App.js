"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This is a place holder for the initial application state.


var recipes = [{
  id: 0,
  name: "chicken",
  date: "2018",
  desc: "Yum yum"
}, {
  id: 1,
  name: "Steak",
  date: "2015",
  desc: "Medium Rare"
}, {
  id: 2,
  name: "Pasta",
  date: "1990",
  desc: "Italian"
}, {
  id: 3,
  name: "Shrimp",
  date: "2018",
  desc: "Yum yum"
}, {
  id: 4,
  name: "Tomatos",
  date: "2018",
  desc: "Yum yum"
}];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "bg-light-green dib br3 pa3 ma2 grow" },
        React.createElement("img", { role: "presentation", src: "//robohash.org/" + id + "?size=200x200" }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h2",
            null,
            name
          ),
          React.createElement(
            "p",
            null,
            desc
          ),
          React.createElement(
            "p",
            null,
            date
          )
        )
      );
    }
  }]);

  return Card;
}(React.Component);

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

var CardList = function CardList(_ref) {
  var recipes = _ref.recipes;

  var cardsArray = recipes.map(function (recipes) {
    return React.createElement(Card, {
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
  robots: React.PropTypes.array.isRequired
};

// This renders the JSX component inside the content node:
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(CardList, { recipes: recipes })
), document.getElementById("root"));