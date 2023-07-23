import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Bike",
      description: "My sportsbike colour is black",
    },
    {
      id: 2,
      name: "Car",
      description: "I have i20 car, white in colour",
    },
    {
      id: 3,
      name: "Scooty",
      description: "I have white colour Activa with latest model",
    },
    {
      id: 4,
      name: "Cycle",
      description: "My cycle is in good condition",
    },
  ]);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
