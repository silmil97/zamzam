import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <footer className={pathname === "/" ? "relative text-white" : "relative"}>
        <Link to="/impressum" className="absolute bottom-2 right-2">Impressum</Link>
        <Link to="/datenschutz" className="absolute bottom-2 right-24">Datenschutz</Link>
      </footer>
    </>
  );
}
