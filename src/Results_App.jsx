// This is a place holder for the initial application state.

const recipes = [
  {
    id: 0,
    name: "chicken",
    date: "2018",
    desc: "Yum yum"
  },
  {
    id: 1,
    name: "Steak",
    date: "2015",
    desc: "Medium Rare"
  },
  {
    id: 2,
    name: "Pasta",
    date: "1990",
    desc: "Italian"
  },
  {
    id: 3,
    name: "Shrimp",
    date: "2018",
    desc: "Yum yum"
  },
  {
    id: 4,
    name: "Tomatos",
    date: "2018",
    desc: "Yum yum"
  }
];


class Card extends React.Component {

  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow">
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.id}</p>
          <p>img</p>
          <p>{this.props.desc}</p>
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

const CardList = ({ recipes }) => {
  const cardsArray = recipes.map(recipe => (
    <Card key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      desc={recipe.desc}
      date={recipe.date} />
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};

CardList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};


// This renders the JSX component inside the content node:
ReactDOM.render(
  <div>
    <CardList recipes={recipes} />
  </div>,
  document.getElementById("contents")
)