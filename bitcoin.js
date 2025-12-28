document.addEventListener("DOMContentLoaded", () => {
  async function fetchBitcoinPrice() {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur');
      const data = await res.json();
      const price = data.bitcoin.eur;
      document.getElementById('btc-price').textContent = `€${price.toLocaleString()}`;
    } catch (error) {
      document.getElementById('btc-price').textContent = 'Preis nicht verfügbar';
      console.error('Fehler beim Laden des Bitcoin‑Preises:', error);
    }
  }

  fetchBitcoinPrice();
  setInterval(fetchBitcoinPrice, 60000);
});
