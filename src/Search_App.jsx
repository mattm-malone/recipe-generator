// This grabs the DOM element to be used to mount React components.
//import axios from 'axios'
var contentNode = document.getElementById("contents");
const YOUR_APP_KEY = '47bf3044e4da401ea23c827c1f66ac1d'
const YOUR_ID = '9444c6c1'

class Recipe extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <h2>{this.props.name}</h2>
          <img width='400px' src={this.props.imageURL}></img>
          <p>Description:<br></br>{this.props.description}</p>
          <p>Number of servings: {this.props.numberOfServings}</p>
          <p>Time to prepare: {this.props.totalTime}</p>
          <p>Source URL: {this.props.sourceRecipeURL}</p>
          <p>Rating: {this.props.rating}</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(){
    super();
  this.state = { value: '',};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = encodeURI(this.state.value)
    fetch(`https://api.edamam.com/search?q=${query}&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d`)
    .then(
    function(response) {
      //console.log(response);
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return false;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="form-group">
        <div className = "row">
          <label htmlFor="search-bar">Input Ingredients:</label>
          <input id="search-bar" type="text" className = "form-control" value={this.state.value} onChange={this.handleChange} placeholder="Enter Ingredients"/>
        <div className="row">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        </div>
      </form>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<App />, contentNode);
