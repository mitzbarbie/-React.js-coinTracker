import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>The Coins Information {loading ? "" : `(${coins.length})`}</h1>
      {loading ? "loading!!!" : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
