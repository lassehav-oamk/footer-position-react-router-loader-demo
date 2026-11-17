import { Link } from 'react-router';

const descriptions = {
  problem: {
    title: 'Ongelma: B renderöidään ennen kuin data saapuu',
    body: 'Kun klikkaat tuotetta, React Router vaihtaa heti sivulle B. B:n useEffect käynnistää API-haun vasta komponentin mounttauksen jälkeen. B näyttää aluksi vain lataustekstin. Koska sisältöä on vähän, footer nousee heti headerin alle. Datan saavuttua sisältö kasvaa ja footer siirtyy alas. Tämä näyttää välähdykseltä.',
    hint: 'Katso footerin paikkaa ennen linkin klikkausta, latauksen aikana ja latauksen jälkeen.'
  },
  css: {
    title: 'Ongelma sama, mutta asettelu korjataan CSS:llä',
    body: 'B hakee edelleen datan vasta mounttauksen jälkeen. Tyhjän sisältöalueen korkeus vaihtelisi kuten ensimmäisessä demossa, ellei sivun Flexbox-asettelu varaisi main-alueelle jäljelle jäävää korkeutta.',
    hint: 'Katso, kuinka footer pysyy ikkunan alareunassa silloinkin, kun B näyttää vain lataustekstin.'
  },
  loader: {
    title: 'Ongelma: navigointi tapahtuu ennen kuin B:n tiedot ovat valmiina',
    body: 'Data Mode -reitillä oleva loader saa tuotetunnuksen URL:sta ja hakee tuotteen ennen kuin kohdereitti renderöidään. A ei hae B:n tietoja eikä välitä niitä propsina. Vanha sivu pysyy näkyvissä latauksen aikana. Koska tässä demossa ei ole CSS-korjausta, footerin sijainti riippuu silti sivun sisällön pituudesta.',
    hint: 'Klikkaa tuotetta ja huomaa: A jää näkyviin, kunnes B:n data on valmiina.'
  },
  combined: {
    title: 'Yhdistetään itsenäiset ratkaisut',
    body: 'Loader hoitaa reittiin kuuluvan datan lataamisen ennen B:n näyttämistä. CSS huolehtii footerin vakaasta sijainnista riippumatta siitä, kuinka lyhyt A:n tai B:n sisältö on. Molemmat ratkaisevat eri ongelman.',
    hint: 'Huomaa sekä vanhan sivun säilyminen latauksen aikana että footerin pysyminen alhaalla.'
  },
};

export default function PageA({ mode }) {
  const info = descriptions[mode];
  return (
    <section className="page-content">
      <span className="eyebrow">SIVU A · Ongelman kuvaus</span>
      <h2>{info.title}</h2>
      <p>{info.body}</p>
      <p className="tip">{info.hint}</p>
      <div className="actions">
        <Link className="primary-link" to={`/${mode}/products/1`}>Avaa tuote 1 →</Link>
        <Link className="secondary-link" to={`/${mode}/products/2`}>Avaa tuote 2 →</Link>
      </div>
      <p className="small">Linkit sisältävät tuotetunnuksen URL:ssa. Kokeile myös kopioida osoite ja avata se uuteen välilehteen.</p>
      {mode === 'problem' && (
        <>
          <div className="placeholder">Placeholder-sisältö 1</div>
          <div className="placeholder">Placeholder-sisältö 2</div>
          <div className="placeholder">Placeholder-sisältö 3</div>
          <div className="placeholder">Placeholder-sisältö 4</div>
          <div className="placeholder">Placeholder-sisältö 5</div>
        </>
      )}
    </section>
  );
}
