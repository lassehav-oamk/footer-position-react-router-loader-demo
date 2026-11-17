// Yhteinen API-funktio kaikille demoille: A ei tiedä B:n datan hakemisesta.
export async function getProduct(id, signal) {
  if (!/^\d+$/.test(String(id))) {
    throw new Response('Virheellinen tuotetunnus', { status: 400 });
  }
  const response = await fetch(
    `https://dummyjson.com/products/${id}?delay=1000`,
    { signal }
  );
  if (!response.ok) {
    throw new Response('Tuotetta ei löytynyt tai palvelu ei vastaa', {
      status: response.status,
    });
  }
  return response.json();
}

// Data Moden loader: saa id:n URL:sta, välittää abort-signaalin fetchille.
export function productLoader({ params, request }) {
  return getProduct(params.id, request.signal);
}
