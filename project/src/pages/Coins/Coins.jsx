
import React, { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './Coins.css';

const Coins = () => {
  const { coins } = useContext(CoinContext);

  return (
    <div className='coins'>
      <div className='coins-container'>
        <h2 className='ten-list'>Top 10 <span style={{ color: "red" }}>list</span></h2>
      </div>
      <table className='crypto-table'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Logo</th>
            <th>Price</th>
            <th>24H Volume</th>
            <th>MarketCap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <tr key={coin.uuid}>
              <td>{coin.rank}</td>
              <td>{coin.name}</td>
              <td>
                <img src={coin.iconUrl} alt={`${coin.name} logo`} className='coin-logo' />
              </td>
              <td>${coin.price}</td>
              <td style={{ textAlign: "center" }}>${coin["24hVolume"]}</td>
              <td>${coin.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
    

     
      
    </div>
  );
};

export default Coins;
