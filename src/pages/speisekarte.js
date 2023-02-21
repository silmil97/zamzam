import * as React from "react";
import Layout from "../components/layout";
import '../styles/global.css';
import { Gerichte } from "../components/speise";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { faLeaf } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used
import { DishTypes } from "../components/Speisekarte/dishTypes";

const Leaf = () => <FontAwesomeIcon icon={faLeaf} className="text-lime-600 -rotate-45" />
const speisePage = ({ data }) => {
	let u = 0

	return (
		<Layout>
			<div className="h-10 w-full"></div>
			<div className="bg-primary  md:w-8/12 mx-auto mt-14 pb-10">
				<p className="ml-2"><Leaf /> = vegetarisch</p>
				<p className="ml-2"><Leaf /><Leaf /> = vegan</p>
				<p className="ml-2">🌶️ = scharf</p>
				<h1 className="text-4xl text-center font-charm"><span className="text-tertiary">S</span>peisekarte🍃</h1>
				<DishTypes data={data} />
				{/* {
					Gerichte.map(
						ele => {
							return (
								<div key={100000 + u}>
									<h2 className={`text-3xl my-0 ml-2 ${'slideIn' + u}`}>{ele.Art}</h2>
									<p className={`text-xl mb-4 ml-2 ${'slideIn' + u}`}>{ele.Info}</p>
									<ul>
										{
											ele.Gerichte.map(
												element => {
													if (element.Gericht) {
														u++;
														return (
															<li key={u} className={`pl-2  z-0 flex ${'slideIn' + u % 2}`} style={{ background: u % 2 === 0 ? "#e6e4e1" : "#bab9b6" }}>
																<StaticImage className="z-0 mr-4" src="../images/Falafel1.jpg" alt="Falafel" placeholder="blurred" quality={100} layout="fixed" width={300} height={300} /> 
																<div>
																	<div className="flex justify-between">

																		<h3 className="text-xl underline decoration-2 decoration-tertiary">{element.Gericht + " - " + element.Allergene.join(", ") + (element.Scharf ? "🌶️" : "")}{element.Zusatz === "vegan" ? <><Leaf /><Leaf /></> : ""}{element.Zusatz === "vegetarisch" ? <Leaf /> : ""}</h3>

																		<div className=" w-20"><p>{element.Preis}</p></div>
																	</div>

																	<p className="py-2">{element.Beschreibung}</p>
																</div>
															</li>
														)
													}
													if (element.Liste) {
														u++;
														return (
															<li key={u} className={`pl-2  ${'slideIn' + u % 2}`} style={{ background: u % 2 === 0 ? "#e6e4e1" : "#bab9b6" }}>
																<h3 className="text-xl underline decoration-2 decoration-tertiary">{element.Liste}</h3>
																<ul className="grid md:grid-cols-4 grid-cols-2">{element.Zutaten.map(elem => <li key={Math.random() + u}>-{elem}</li>)}</ul>
															</li>
														)
													}
													return <></>

												}
											)
										}
									</ul>
								</div>
							)
						}
					)
			*/}
			</div>
		</Layout>
	)
}

export default speisePage;

export const query = graphql`
  query ContentfulQuery {
		allContentfulDishType(sort: {position: ASC}) {
			nodes {
				name
				description
			}
		}
		allContentfulDish {
			nodes {
				preis
				vegan
				vegetarian
				name
				hot
				dishType {
        	name
      	}
				description {
        	description
      	}
			}
		}
	}
`