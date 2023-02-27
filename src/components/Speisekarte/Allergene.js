import React from "react";

export const Allergene = ({ data }) => {
  return (
    <div className=" my-0 min-w-fit">
      <h2 className="text-3xl">Allergenstoffe</h2>
      {
        data.allContentfulAllergene.nodes.filter(element => element.node_locale === "de").map((element, id) => {
          return (
            <li className="flex" key={1000 + id}>
              <p className="w-9">{element.buchstabe}</p><p>{element.name}</p>
            </li>
          )
        })
      }
    </div>
  )
}