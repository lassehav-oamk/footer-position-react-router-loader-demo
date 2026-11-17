# React Router: footerin hyppiminen ja datan lataaminen

Neljä suomenkielistä opetusesimerkkiä, jotka näyttävät saman ongelman ja kaksi toisistaan riippumatonta ratkaisua.

## Käynnistäminen

Vaatii Node.js 20.19+ tai 22.12+ (esim. Node 24).

```bash
npm install
npm run dev
```

Avaa Viten ilmoittama osoite (yleensä http://localhost:5173).

## Demot

| URL | Datan haku | Asettelu | Huomio |
|---|---|---|---|
| `/problem` | B:n `useEffect` | Normaali dokumenttivirta | Footer siirtyy datan valmistuttua |
| `/css` | B:n `useEffect` | Flexbox + `min-height: 100vh` | Footer pysyy alhaalla |
| `/loader` | Reitin `loader` | Normaali dokumenttivirta | A pysyy näkyvissä odotuksen ajan |
| `/combined` | Reitin `loader` | Flexbox | Molemmat hyödyt |

Avaa A:n linkistä B, esimerkiksi `/combined/products/1`. Kokeile myös avata tämä osoite suoraan tai päivittää sivu. Tuotetunnus luetaan URL:sta, joten deep linking toimii joka demossa.

**Huomaa:** Kaikki neljä demoa on teknisistä syistä koottu samaan `createBrowserRouter`-sovellukseen. Demon 1 ja 2 datanhakutapa toimii myös Declarative Modessa (`BrowserRouter` + `Routes`), mutta demojen 3 ja 4 `loader` **ei** toimi Declarative Modessa. Se edellyttää Data Modea (`createBrowserRouter` + `RouterProvider`). Ensimmäisten demojen toteutus käyttää siis deklaratiivisen mallin komponenttikoukkuja, vaikka koko esimerkin router on Data Mode.

## Miksi footer hyppää?

Footer ei varsinaisesti välähdä, vaan se liikkuu normaalissa dokumenttivirrassa: lyhyen sisällön jälkeen footer on korkealla, ja uuden sisällön tultua alhaalla. `useEffect` suoritetaan komponentin renderöinnin jälkeen; B:n data ei silloin ole valmiina. Ongelmaa voi korostaa selaimen DevToolsissa hidastamalla verkkoyhteyttä.

## CSS-ratkaisu

Tiedosto `src/style.css`:

```css
.stable-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.stable-layout .demo-content { flex: 1; }
```

`100vh` tarkoittaa sataa prosenttia viewportin korkeudesta. `min-height` on tarkoituksella käytössä `height`-ominaisuuden sijaan, jotta pitkä sisältö saa kasvattaa sivua. `100dvh` ottaa huomioon dynaamisen viewportin esimerkiksi mobiiliselaimissa. Kun sisältö on näkymää pidempi, footer siirtyy luonnollisesti sisällön jälkeen: tarkoitus ei ole tehdä kiinteää, päällekkäin kelluvaa footeria (`position: fixed`). Demoissa 2 ja 4 käytetään myös `100dvh`-tukea selaimen niin salliessa.

Dokumentaatio: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length#vh

## Loaderin käyttäytyminen vaiheittain

1. A:n linkki osoittaa esimerkiksi URL:iin `/loader/products/2`.
2. React Router tunnistaa reitin `products/:id` ja muodostaa `params.id`-arvoksi merkkijonon `"2"`.
3. Reitin `loader` käynnistyy. Se kutsuu erillistä `getProduct(id, request.signal)` -API-funktiota. Tämä erottaa datan haun sekä A:sta että B:n käyttöliittymästä.
4. Kun `fetch` on kesken, router ylläpitää edellistä näkymää. `useNavigation().state` vaihtuu arvosta `idle` esimerkiksi arvoon `loading`, jolloin sovelluksen ylälaitaan ilmestyy ilmoitus.
5. Kun loader palauttaa tuotteen, kohdereitti voidaan renderöidä. Komponentti B käyttää `useLoaderData()`-hookia valmiin datan lukemiseen.
6. Jos käyttäjä avaa URL:n suoraan tai päivittää sivun, loader suoritetaan yhtä lailla: tuote haetaan URL-parametrin perusteella. Ei tarvita A:n kautta kulkemista.
7. Jos lataus epäonnistuu, routerin virhetilanteelle on hyvä määritellä `errorElement` tai `ErrorBoundary`. Tässä harjoituksessa sen saa opiskelijoiden jatkotehtäväksi; onnistuneen datalähdön perusvirta on tarkoituksella etusijalla.

Tärkeää: loader **ei** tee verkkopyynnöstä nopeampaa eikä yksin vakauta footerin korkeutta. Se siirtää B:n renderöinnin vasta valmiin datan jälkeen. Myös loaderit voidaan uusia myöhemmillä navigoinneilla. Yksinkertaista välitöntä latausvälimuistia ei ole tässä rakennettu.

Docs: https://reactrouter.com/start/data/data-loading

## Propsit, URL-parametri ja loader-data

- `PageA` luo vain `<Link to="/loader/products/2">`: A ei tiedä tuotteen datan sisällöstä.
- `PageB` voi lukea tunnuksen `const { id } = useParams()` avulla. Se mahdollistaa syvälinkityksen.
- Data Mode -versiossa B saa reitin loaderin tuloksen: `const product = useLoaderData()`.
- B voi välittää saadun datan toiselle esityskomponentille tavallisina React-propseina: `<ProductDetails product={product} />`.
- Reittikomponentille B voidaan antaa myös staattisia propseja reittimäärittelyssä, esimerkiksi `element: <LoaderPageB mode="loader" />`. Tämä **ei** ole sama asia kuin A:n datan siirtäminen B:lle, eikä poista syvälinkitysvaatimusta.
- `navigate(..., { state })` on mahdollinen navigoinnin mukana tuleva tila, mutta sen varaan ei kannata rakentaa reitin välttämätöntä dataa: suoran URL:n avaaminen ei takaa statea.

## Opiskelijoiden jatkotehtäviä

1. Lisää latausvirheelle ja virheelliselle tuotetunnukselle oma näkymä (`errorElement`, `useRouteError`).
2. Lisää linkki tuotteeseen 3 ja varmista, että suora URL toimii.
3. Tutki CSS: `min-height: 100vh`, `100dvh`, `height`, `flex: 1` ja `position: fixed` – miksi kolme viimeistä eivät ole keskenään vaihdettavissa?
4. Tee Declarative Mode -reiteille oma pieni `BrowserRouter`-projekti ja vertaa sen routerin muodostamista `createBrowserRouter`-toteutukseen.

## Lähteet

- Router-moodit: https://reactrouter.com/start/modes
- Data loading: https://reactrouter.com/start/data/data-loading
- `useLoaderData`: https://reactrouter.com/api/hooks/useLoaderData
- Viewport-yksiköt: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length
- DummyJSON delay: https://dummyjson.com/docs
