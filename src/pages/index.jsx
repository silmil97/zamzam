import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/global.css';
// import Image from '../images/zamzam_ende_logo.png'

function IndexPage() {
  // const doto = data.allContentfulDish.nodes;
  return (
    <Layout>
      <div className="bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-primary/70 w-full sm:w-1/2 h-1/3 grid fadeIn1 place-content-center">
          <h1 className="text-3xl text-center font-charm">
            Willkommen bei
            {' '}
            <span className="text-tertiary">Z</span>
            am
            <span className="text-tertiary">Z</span>
            am
          </h1>
          <p className="text-center">Ein Stück Orient in Göttingen</p>
          <div className="flex justify-between mt-6">
            <a href="/">
              <svg color="#c79c60" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mt-1 sm:w-10 sm:h-10">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="#c79c60" />
              </svg>
            </a>
            <button type="button" className="bg-tertiary active:bg-whatever hover:bg-secondary font-bold px-4 rounded">Jetzt Anrufen</button>
            <svg color="#c79c60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mt-1 sm:w-10 sm:h-10 ">
              <path d="M13.2893 6.80241V8.83149H15.9835C15.8843 10.4002 15.6529 11.8325 15.6529 11.8325H13.2727V20H9.71901V11.8325H8V8.84855H9.71901V6.41023C9.71901 5.9669 9.63636 3 13.3719 3H16V6.08626H14.0661C13.8778 6.09943 13.6992 6.17702 13.5585 6.30673C13.4178 6.43645 13.323 6.61088 13.2893 6.80241Z" fill="#c79c60" />
            </svg>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query ContentfulQuery {
    allContentfulDish {
      nodes {
        name
      }
    }
  }
`;
