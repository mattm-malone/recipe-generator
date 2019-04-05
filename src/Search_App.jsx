// This grabs the DOM element to be used to mount React components.
import axios from 'axios'
var contentNode = document.getElementById("contents");
const YOUR_APP_KEY = '47bf3044e4da401ea23c827c1f66ac1d'
const YOUR_ID = '9444c6c1'

class Recipe extends React.Component {

  render() {
    return (
      <div className="card">
        <div>
          <h2>{this.props.name}</h2>
          <img src={this.props.images[0]}></img>
          <p>Description:<br></br>{this.props.desc}</p>
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

  makeQuery(query) {
    const Http = new
  }

  handleSubmit(event) {
    alert('A Recipe Query Was Submitted: ' + this.state.value);
    console.log(this.state);
    axios.get('http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters')
    .then(response => console.log(response))
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Recipe:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>

      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<App />, contentNode);
