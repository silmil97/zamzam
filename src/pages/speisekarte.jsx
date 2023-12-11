import * as React from 'react';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import DishTypes from '../components/Speisekarte/dishTypes';
import Allergene from '../components/Speisekarte/Allergene';
import Zusatzstoffe from '../components/Speisekarte/Zusatzstoffe';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

function Leaf() {
  return <FontAwesomeIcon icon={faLeaf} className="text-lime-600 -rotate-45" />;
}
const speisePage = ({ data }) => (
  <Layout id="App">
    <div className="h-10 w-full" />
    <div className="bg-primary  md:w-8/12 mx-auto mt-14 pb-10">
      <p className="ml-2">
        <Leaf />
        {' '}
        = vegetarisch
      </p>
      <p className="ml-2">
        <Leaf />
        <Leaf />
        {' '}
        = vegan
      </p>
      <p className="ml-2">🌶️ = scharf</p>
      <h1 className="text-4xl text-center font-charm">
        <span className="text-tertiary">S</span>
        peisekarte🍃
      </h1>
      <DishTypes data={data} />
      <div id="allergene" className="ml-2 md:flex justify-between">
        <Zusatzstoffe data={data} />
        <Allergene data={data} />
      </div>
    </div>
  </Layout>
);

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
        allergene {
          buchstabe
        }
        description {
          description
        }
        dishtype {
          name
        }
        picture {
          url
        }
        zusatzstoffe {
          nummer
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
`;
