
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
 
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
          headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '3cdbfd5661msh1de21914f2283c8p1ef45fjsn7163903de1c8'
          },
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl', 
            timePeriod: '24h', 
            offset: '0', 
            limit: '10', 
          }
        });
    
        setCoins(response.data.data.coins);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, [currency]); 

  const contextValue = {
    coins,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
