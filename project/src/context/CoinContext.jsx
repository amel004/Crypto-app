import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const limit = 10; 
        const offset = (currentPage - 1) * limit;
        const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
          headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '3cdbfd5661msh1de21914f2283c8p1ef45fjsn7163903de1c8'
          },
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl', 
            timePeriod: '24h', 
            offset: offset.toString(), 
            limit: limit.toString(), 
          }
        });

        setCoins(response.data.data.coins);
        const totalCoins = response.data.data.total;
        setPageCount(Math.ceil(totalCoins / limit));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, [currency, currentPage]); 

  const contextValue = {
    coins,
    currency,
    setCurrency,
    currentPage,
    setCurrentPage,
    pageCount
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
