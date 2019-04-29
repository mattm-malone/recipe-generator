webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(10));

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string.isRequired,
  as: _propTypes.default.elementType
};
var defaultProps = {
  type: 'valid',
  as: 'div'
};

var Feedback = _react.default.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      className = _ref.className,
      type = _ref.type,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type && type + "-feedback")
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  as: 'div'
};

var Col = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
Col.defaultProps = defaultProps;
var _default = Col;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(86);

var _Search = __webpack_require__(188);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'h2',
      null,
      'Error 404'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Page Not Found'
    )
  );
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
// const RoutedApp = () => (
//   <Router history={hashHistory} >
//     <Redirect from="/" to="/index" />
//     <Route path="/index" component={Search} />
//     <Route path="*" component={NoMatch} />
//   </Router>);

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(_Search2.default, null), contentNode);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(32));

var _forwardRef = _interopRequireDefault(__webpack_require__(60));

var _react = _interopRequireWildcard(__webpack_require__(0));

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(99);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(190);

var _Card2 = _interopRequireDefault(_Card);

var _CardColumns = __webpack_require__(194);

var _CardColumns2 = _interopRequireDefault(_CardColumns);

var _Button = __webpack_require__(199);

var _Button2 = _interopRequireDefault(_Button);

var _Form = __webpack_require__(202);

var _Form2 = _interopRequireDefault(_Form);

var _Col = __webpack_require__(101);

var _Col2 = _interopRequireDefault(_Col);

var _Row = __webpack_require__(293);

var _Row2 = _interopRequireDefault(_Row);

var _Container = __webpack_require__(294);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Link } from 'react-router';

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

      return _react2.default.createElement(
        _Card2.default,
        { bg: 'light', style: { width: '220px' } },
        _react2.default.createElement(_Card2.default.Img, { variant: 'top', src: this.props.imageURL }),
        _react2.default.createElement(
          _Card2.default.Body,
          null,
          _react2.default.createElement(
            _Card2.default.Title,
            null,
            this.props.name
          ),
          _react2.default.createElement(
            _Card2.default.Subtitle,
            { className: 'mb-2 text-muted' },
            _react2.default.createElement(
              'a',
              { href: this.props.sourceRecipeURL },
              this.props.source
            )
          ),
          _react2.default.createElement(
            _Card2.default.Text,
            null,
            'Number of servings: ',
            this.props.numberOfServings
          ),
          _react2.default.createElement(
            _Card2.default.Text,
            null,
            'Calories per serving: ',
            this.props.caloriesPerServing
          ),
          _react2.default.createElement(
            _Card2.default.Text,
            null,
            'Time to prepare: ',
            this.props.totalTime
          ),
          _react2.default.createElement(
            _Card2.default.Text,
            null,
            'Ingredients:'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'card-text' },
            this.props.ingredients.map(function (recipe, i) {
              return _react2.default.createElement(
                'li',
                { key: i + _this2.props.name },
                recipe
              );
            })
          )
        )
      );
    }
  }]);

  return Recipe;
}(_react2.default.Component);

var CardList = function CardList(_ref) {
  var recipes = _ref.recipes;

  var cardsArray = recipes.map(function (recipe) {
    return _react2.default.createElement(Recipe, { key: recipe.id,
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

  return _react2.default.createElement(
    _CardColumns2.default,
    null,
    cardsArray
  );
};

CardList.propTypes = {
  recipes: _propTypes2.default.array.isRequired
};

Recipe.propTypes = {
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired,
  imageURL: _propTypes2.default.string.isRequired,
  source: _propTypes2.default.string.isRequired,
  numberOfServings: _propTypes2.default.number.isRequired,
  sourceRecipeURL: _propTypes2.default.string.isRequired,
  totalTime: _propTypes2.default.number.isRequired,
  caloriesPerServing: _propTypes2.default.number.isRequired,
  ingredients: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

var Search = function (_React$Component2) {
  _inherits(Search, _React$Component2);

  function Search() {
    _classCallCheck(this, Search);

    var _this3 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this3.state = {
      value: '',
      searchResult: []
    };
    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(Search, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'createRecipe',
    value: function createRecipe(newRecipe) {
      var newRecipes = this.state.searchResult.slice();
      newRecipe.caloriesPerServing = newRecipe.caloriesPerServing / newRecipe.numberOfServings;
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
      fetch('https://api.edamam.com/search?q=' + this.state.value + '&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d').then(function (resp) {
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
      return _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(
          _Form2.default,
          { onSubmit: this.handleSubmit, style: { marginTop: '2rem' } },
          _react2.default.createElement(
            _Form2.default.Row,
            null,
            _react2.default.createElement(
              _Form2.default.Group,
              { as: _Col2.default },
              _react2.default.createElement('input', { id: 'search-bar', type: 'text', className: 'form-control', value: this.state.value, onChange: this.handleChange, placeholder: 'Enter Ingredients' })
            )
          ),
          _react2.default.createElement(
            _Form2.default.Row,
            null,
            _react2.default.createElement(
              _Col2.default,
              { className: 'text-center' },
              _react2.default.createElement(
                _Button2.default,
                { type: 'submit', variant: 'light', size: 'lg' },
                'Search'
              )
            )
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          { style: { marginTop: '2rem' } },
          _react2.default.createElement(CardList, { recipes: this.state.searchResult })
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(61));

var _divWithClassName = _interopRequireDefault(__webpack_require__(191));

var _CardContext = _interopRequireDefault(__webpack_require__(192));

var _CardImg = _interopRequireDefault(__webpack_require__(193));

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var defaultProps = {
  as: 'div',
  body: false
};

var Card = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return _react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
Card.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
Card.Header = (0, _createWithBsPrefix.default)('card-header');
Card.Footer = (0, _createWithBsPrefix.default)('card-footer');
Card.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = Card;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _default = _react.default.createContext(null);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  as: 'img',
  variant: null
};

var CardImg = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(61));

var _default = (0, _createWithBsPrefix.default)('card-columns');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var _SafeAnchor = _interopRequireDefault(__webpack_require__(200));

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      innerRef: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  var Component = as || 'button';
  if (ref) props.ref = ref;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(43));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(32));

var _react = _interopRequireDefault(__webpack_require__(0));

var _createChainedFunction = _interopRequireDefault(__webpack_require__(201));

var defaultProps = {
  as: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        innerRef = _this$props2.innerRef,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["as", "disabled", "onKeyDown", "innerRef"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (innerRef) props.ref = innerRef;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      onClick: this.handleClick,
      onKeyDown: (0, _createChainedFunction.default)(this.handleKeyDown, onKeyDown)
    }));
  };

  return SafeAnchor;
}(_react.default.Component);

SafeAnchor.defaultProps = defaultProps;
var _default = SafeAnchor;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

var _default = createChainedFunction;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(61));

var _ThemeProvider = __webpack_require__(15);

var _FormGroup = _interopRequireDefault(__webpack_require__(203));

var _FormControl = _interopRequireDefault(__webpack_require__(204));

var _FormCheck = _interopRequireDefault(__webpack_require__(205));

var _FormLabel = _interopRequireDefault(__webpack_require__(208));

var _FormText = _interopRequireDefault(__webpack_require__(209));

var defaultProps = {
  inline: false,
  as: 'form'
};

var Form = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

Form.displayName = 'Form';
Form.defaultProps = defaultProps;
Form.Row = (0, _createWithBsPrefix.default)('form-row');
Form.Group = _FormGroup.default;
Form.Control = _FormControl.default;
Form.Check = _FormCheck.default;
Form.Label = _FormLabel.default;
Form.Text = _FormText.default;
var _default = Form;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  as: 'div'
};

var FormGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');
  var context = (0, _react.useMemo)(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return _react.default.createElement(_FormContext.default.Provider, {
    value: context
  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
});

FormGroup.displayName = 'FormGroup';
FormGroup.defaultProps = defaultProps;
var _default = FormGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _warning = _interopRequireDefault(__webpack_require__(28));

var _Feedback = _interopRequireDefault(__webpack_require__(100));

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  as: 'input'
};

var FormControl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      type = _ref.type,
      size = _ref.size,
      id = _ref.id,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "type", "size", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-control');
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
  }

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});

FormControl.displayName = 'FormControl';
FormControl.defaultProps = defaultProps;
FormControl.Feedback = _Feedback.default;
var _default = FormControl;
exports.default = _default;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var _Feedback = _interopRequireDefault(__webpack_require__(100));

var _FormCheckInput = _interopRequireDefault(__webpack_require__(206));

var _FormCheckLabel = _interopRequireDefault(__webpack_require__(207));

var defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var FormCheck = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "title", "type", "label", "children", "custom"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;

  var input = _react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled
  }));

  return _react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, _react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
  }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.defaultProps = defaultProps;
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var defaultProps = {
  type: 'checkbox'
};

var FormCheckInput = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isStatic = _ref.isStatic,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "isStatic"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-input');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("input", (0, _extends2.default)({}, props, {
    ref: ref,
    id: id || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});

FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.defaultProps = defaultProps;
var _default = FormCheckInput;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var defaultProps = {
  type: 'checkbox'
};

var FormCheckLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "htmlFor"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-label');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-label')
  }));
});

FormCheckLabel.displayName = 'FormCheckLabel';
FormCheckLabel.defaultProps = defaultProps;
var _default = FormCheckLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _warning = _interopRequireDefault(__webpack_require__(28));

var _Col = _interopRequireDefault(__webpack_require__(101));

var _FormContext = _interopRequireDefault(__webpack_require__(27));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  column: false,
  srOnly: false
};

var FormLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return _react.default.createElement(_Col.default, (0, _extends2.default)({}, props, {
    className: classes,
    as: "label"
  }));
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    _react.default.createElement("label", (0, _extends2.default)({}, props, {
      htmlFor: htmlFor || controlId,
      ref: ref,
      className: classes
    }))
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports.default = _default;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  as: 'small'
};

var FormText = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

FormText.displayName = 'FormText';
FormText.defaultProps = defaultProps;
var _default = FormText;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var FormContext = _react.default.createContext({
  controlId: undefined
});

var _default = FormContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(32));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var Row =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        Component = _this$props.as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "noGutters", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(_react.default.Component);

Row.defaultProps = {
  as: 'div',
  noGutters: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Row, 'row');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ThemeProvider = __webpack_require__(15);

var defaultProps = {
  as: 'div',
  fluid: false
};

var Container = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      Component = _ref.as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(__webpack_require__(8));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(13));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _camelize = _interopRequireDefault(__webpack_require__(62));

var _ThemeProvider = __webpack_require__(15);

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];

/***/ })

},[146]);