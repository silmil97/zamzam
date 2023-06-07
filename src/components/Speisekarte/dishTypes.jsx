import React from 'react';
import Dishes from './dishes';

export default function DishTypes(props) {
  return (
    <>
      {props.data.allContentfulDishType.nodes.map((element) => (
        <div key={Math.random()}>
          <h2 className={`text-3xl my-0 ml-2 ${`slideIn${1}`}`}>{element.name}</h2>
          <p className={`text-xl mb-4 ml-2 ${`slideIn${1}`}`}>{element.description}</p>
          <Dishes data={props.data.allContentfulDish.nodes} type={element.name} />
        </div>
      ))}
    </>
  );
}
