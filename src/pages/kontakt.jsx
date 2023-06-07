import * as React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
// import Image from '../images/zamzam_ende_logo.png'

function Kontakt() {
  const ref = React.useRef(null);
  console.log(ref);

  return (
    <Layout>
      <div className=" h-screen w-screen">
        <div className="h-10 w-full" />
        <div className="bg-primary  w-11/12 h-5/6 mx-auto mt-14 pb-10">
          <h1 className="text-4xl text-center font-charm">
            <span className="text-tertiary">K</span>
            ontakt
          </h1>
          <div className=" flex items-center h-full">
            <iframe title="map" className="w-2/4 ml-10 h-2/3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9506501107917!2d9.928962015738056!3d51.532464979639236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d5776f246d05%3A0xb93384c5466e514c!2sZamZam!5e0!3m2!1sde!2sde!4v1656834582235!5m2!1sde!2sde" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="w-1 h-3/4 bg-tertiary rounded mx-10" />
            <div className="h-2/3">
              <p className="text-xl">Zamzam</p>
              <p className="text-xl">Papendiek 1</p>
              <p className="text-xl">37073 Göttingen</p>
              <br />
              <p className="text-xl">Öffnungszeiten:</p>
              <p className="text-xl">Mo-Sa 17:00–22:00</p>
              <br />
              <p className="text-xl">Telefon:</p>
              <p className="text-xl">+49 551 38103738</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Kontakt;
