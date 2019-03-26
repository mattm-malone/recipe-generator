//import SearchBar from 'material-ui-search-bar-enhanced'

// This is a place holder for the initial application state.
/*
const styles = theme => ({
  root: {
      width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
*/
;

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Search extends React.Component {
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    <h1>my view</h1> 
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Search />, contentNode);
