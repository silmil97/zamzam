import React from "react";
import { Warnung } from "./Warnung";
import { Popup } from "./Popup";


export const Dishes = (props) => {
	return (
		<>
			{
				props.data.filter(element => element.dishtype.name === props.type).map((element, index) => {
					return (
						<li key={Math.random()} className={`w-full pl-2  z-0 flex ${'slideIn' + index % 2}`} style={{ background: index % 2 === 0 ? "#e6e4e1" : "#bab9b6" }}>
							<div className="w-full ">
								<div className="flex justify-between ">
									<h3 className="text-xl underline decoration-2 decoration-tertiary wrap">{element.name} <Warnung data={element} /></h3>
									<div className=" sm:w-20 mr-4 sm:mr-0"><p>{element.preis.toFixed(2).split('.').join(',')}€</p></div>
								</div>
								<div className="flex justify-between">
									<p className="py-2">{element.description?.description}</p>
									{element.picture?.publicUrl ? <Popup url={element.picture.publicUrl} /> : ""}
								</div>
							</div>
						</li>
					)
				})
			}
		</>
	)
}