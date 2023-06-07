/* eslint-disable react/no-array-index-key */
import React from 'react';

export default function Zusatzstoffe({ data }) {
  return (
    <div className="my-0 min-w-fit mr-5">
      <h2 className="text-3xl ">Zusatzstoffe</h2>
      {
        data.allContentfulZusatzstoffe.nodes.filter((element) => element.node_locale === 'de').map((element, id) => (
          <li className="flex" key={100 + id}>
            <p className="w-9">{element.nummer}</p>
            <p>{element.name}</p>
          </li>
        ))
      }
    </div>
  );
}
