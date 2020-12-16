import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
  },
  {
    id: 2,
    name: "Kimbap",
    rating: 4.9
  },
  {
    id: 3,
    name: "Kimmoo",
    rating: 3.9
  },
  {
    id: 4,
    name: "Kim",
    rating: 2.9
  }
];

function Food({name, rating}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
    );
}

export default App;
