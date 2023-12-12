/* eslint-disable max-len */
import * as React from 'react';
import Layout from '../components/layout';

function Impressum() {
  return (
    <Layout>
      <div className="h-15 w-full">jj</div>
      <div className="bg-primary  md:w-8/12 mx-auto mt-14 pb-10">
        <div className="impressum">
          <h1 className="text-5xl">Impressum</h1>
          <br />
          <h3 className="text-2xl">Angaben gemäß § 5 TMG</h3>
          <p>
            Omar Abbaiibo
            <br />
            Papendiek 1
            <br />
            37073 Göttingen
            {' '}
            <br />
          </p>
          <h3 className="text-2xl">Vertreten durch: </h3>
          <p>Omar Abbaiibo</p>

          <h3 className="text-2xl">Kontakt:</h3>
          <p>
            Telefon: 0551-38103738
            <br />
            E-Mail:
            {' '}
            <a href="mailto:ahmadabbaiibo@googlemail.com">ahmadabbaiibo@googlemail.com</a>
            <br />
          </p>

          <h3 className="text-2xl">Umsatzsteuer-ID:</h3>
          {' '}
          <br />
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE293224853</p>
          <br />
          <br />

          <h3 className="text-2xl">Wirtschafts-ID: </h3>
          <br />
          <p>
            wirtschafts-id
            <br />
          </p>
          <p>
            <h2 className="text-4xl">Haftungsausschluss: </h2>
            <br />
            <br />
            <h3 className="text-2xl">Haftung für Inhalte</h3>
            <br />
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            <br />
            <br />
            <h3 className="text-2xl">Haftung für Links</h3>
            <br />
            <br />
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            <br />
            <br />
            <h3 className="text-2xl">Urheberrecht</h3>
            <br />
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <br />
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Impressum;
