import React, { useContext, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './Coins.css';


const Coins = () => {
  const { coins } = useContext(CoinContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const coinsPerPage = 10;
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;

  // Filtriranje kovanica na osnovu pretrage
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const pageCount = Math.ceil(filteredCoins.length / coinsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Skroluje na vrh stranice
  };

  return (
    <div className='coins'>
      <div className='coins-container'>
        <h2 className='ten-list'>Top 10 <span style={{ color: "red" }}>list</span></h2>
        <input
          type='text'
          placeholder='Search for a coin...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />
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
          {currentCoins.map(coin => (
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

      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount}>{">"}</button>
      </div>
    </div>
  );
};

export default Coins;
