import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import '../styles/global.css';

function Catering() {
  return (
    <Layout>
      <div className=" h-screen w-screen">
        <div className="h-10 w-full" />
        <div className="bg-primary md:w-8/12 md:mx-auto mt-14 pb-10 mx-3">
          <h1 className="text-4xl text-center my-10 font-charm">
            <span className="text-tertiary">T</span>
            agan
            {' '}
            <span className="text-tertiary">C</span>
            atering
          </h1>
          <StaticImage className="ml-3 float-right" src="../images/Falafel1.jpg" alt="Falafel" placeholder="blurred" quality={50} layout="fixed" width={300} height={300} />
          <p className="m-3">
            Wir bieten Ihnen eine unglaubliche Auswahl an
            authentischen orientalischen Gerichten,
            die mit modernen Kochtechniken kombiniert werden,
            um Ihnen einzigartige Geschmackserlebnisse zu bieten.
            Unser Kochteam besteht aus erfahrenen, talentierten Köchen,
            die das Beste aus jedem Gericht herausholen.
            Unser Anspruch ist es, Ihnen ein unvergessliches Geschmackserlebnis zu bieten.
          </p>
          <StaticImage className="float-left mt-16 mx-3" src="../images/Kibbah.jpg" alt="Buffet" placeholder="blurred" quality={50} layout="fixed" width={250} height={250} />
          <p className="mt-16 m-3">Unser Catering-Service bietet Ihnen eine Vielzahl von Gerichten, die für jeden Geschmack etwas zu bieten haben. Wir bieten Ihnen die Möglichkeit, ein einzigartiges Menü zu kreieren, das Ihren speziellen Anforderungen entspricht. Unser Catering-Service ist perfekt für Veranstaltungen jeder Art, ob es sich um eine private Party, einen Geburtstag, eine Hochzeit oder eine Firmenfeier handelt.</p>
          <p className="m-3 mt-16">Wenn Sie ein professionelles Catering für Ihre Veranstaltung benötigen, zögern Sie nicht, uns zu kontaktieren. Unser Kundenservice ist jederzeit für Sie da, um Ihnen bei allen Fragen zu helfen. Rufen Sie uns einfach unter +49 551 38103738 an oder schicken Sie uns eine E-Mail an info@tagan-catering.de. </p>
          <p className="m-3 mt-16">Gönnen Sie sich und Ihren Gästen ein unvergessliches Geschmackserlebnis und wählen Sie Tagan Catering, wenn es um das perfekte Catering geht. Wir freuen uns auf Ihre Anfrage!</p>
        </div>
      </div>
    </Layout>
  );
}

export default Catering;
