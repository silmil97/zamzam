import React from 'react';
import Navbar from './Navbar';

// const currentPage = (current) => {
//     switch (current) {
//         case 'home':
//             return {
//                 home: true,
//                 Speisekarte: false,
//                 Standort: false,
//                 Kontakt: false,
//                 Catering: false
//             }
//         case 'Speisekarte':
//             return {
//                 home: false,
//                 Speisekarte: true,
//                 Standort: false,
//                 Kontakt: false,
//                 Catering: false
//             }
//         case 'Standort':
//             return {
//                 home: false,
//                 Speisekarte: false,
//                 Standort: true,
//                 Kontakt: false,
//                 Catering: false
//             }
//         case 'Kontakt':
//             return {
//                 home: false,
//                 Speisekarte: false,
//                 Standort: false,
//                 Kontakt: true,
//                 Catering: false
//             }
//         case 'Catering':
//             return {
//                 home: false,
//                 Speisekarte: false,
//                 Standort: false,
//                 Kontakt: false,
//                 Catering: true
//             }
//     }
// }

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <footer />
    </>
  );
}
