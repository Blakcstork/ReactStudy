//This is the practice of create-react-app

import {useState, useEffect} from "react";



function Selector(){
    const [coins, setCoins] = useState([])
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        .then((json) => {
            setCoins(json);
          });
  
    }, []);
    return (
    <select>
        {coins.map((coin, index) => (
            <option key = {index}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price}</option>
        ))}
    </select>
    )

}


function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(()=>{
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json) => {
          setCoins(json);
          setLoading(false);
        });

  }, []);

  return (  
  <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading..</strong> : null}
      <select>
          {coins.map((coin, index) => (
              <option key = {index}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price}</option>
          ))}
      </select>

  </div>
  )
}

export default App;
