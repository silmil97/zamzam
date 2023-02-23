import * as React from "react";
import Layout from "../components/layout";
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from "gatsby";
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
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
				<div className="ml-2 md:flex justify-between">
					<div className="my-0 min-w-fit mr-5">
						<h2 className="text-3xl ">Zusatzstoffe</h2>
						{ 
							data.allContentfulZusatzstoffe.nodes.filter(element => element.node_locale === "de").map((element, id) => {
								return (
									<li className="flex" key={100 + id}>
										<p className="w-9">{element.nummer}</p><p>{element.name}</p>
									</li>
								)
							}) 
						}
					</div>
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
				</div>
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
				dishtype {
					name
				}
				description {
        	description
      	}
			}
		}
		allContentfulZusatzstoffe(sort: {nummer: ASC})  {
    	nodes {
      	nummer
      	name
				node_locale
    	}
  	}
		allContentfulAllergene(sort: {buchstabe: ASC}) {
			nodes {
				name
				node_locale
				buchstabe
			}
		}
	}
`