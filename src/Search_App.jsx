// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

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
    alert('A Recipe Query Was Submitted: ' + this.state.value);
    console.log(this.state);
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
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<App />, contentNode);
