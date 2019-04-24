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
      return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            this.props.name
          ),
          React.createElement('img', { width: '400px', src: this.props.imageURL }),
          React.createElement(
            'p',
            null,
            'Description:',
            React.createElement('br', null),
            this.props.description
          ),
          React.createElement(
            'p',
            null,
            'Number of servings: ',
            this.props.numberOfServings
          ),
          React.createElement(
            'p',
            null,
            'Time to prepare: ',
            this.props.totalTime
          ),
          React.createElement(
            'p',
            null,
            'Source URL: ',
            this.props.sourceRecipeURL
          ),
          React.createElement(
            'p',
            null,
            'Rating: ',
            this.props.rating
          )
        )
      );
    }
  }]);

  return Recipe;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this2.state = { value: '' };
    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var query = encodeURI(this.state.value);
      fetch('https://api.edamam.com/search?q=' + query + '&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d').then(function (response) {
        //console.log(response);
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return false;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
        });
      }).catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
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
            React.createElement('input', { id: 'search-bar', type: 'text', className: 'form-control', value: this.state.value, onChange: this.handleChange, placeholder: 'Enter Ingredients' }),
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
      );
    }
  }]);

  return App;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(App, null), contentNode);