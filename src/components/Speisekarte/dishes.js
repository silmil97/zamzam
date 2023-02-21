import React from "react";
import { graphql, useStaticQuery } from "gatsby"

// .filter(element => element.dishType[0].name == props.type)
export const Dishes = (props) => {
  console.log(props.data[0])
  return (
    <>
      {
        props.data.filter(element => element.dishType[0].name == props.type).map((element, index )=> (
          <li key={Math.random()} className={`w-full pl-2  z-0 flex ${'slideIn' + index % 2}`} style={{ background: index % 2 === 0 ? "#e6e4e1" : "#bab9b6" }}>
            <div className="w-full">
              <div className="flex justify-between ">
                <div>
                  <h3 className="text-xl underline decoration-2 decoration-tertiary">{element.name}</h3>
                  
                </div>
                <div className=" w-20"><p>{element.preis.toFixed(2).split('.').join(',')}€</p></div>
              </div>
              <p className="py-2">{element.description.description}</p>
            </div>
          </li>
        ))
      }
    </>
  )
}