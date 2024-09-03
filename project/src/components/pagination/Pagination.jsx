import { useEffect, useState } from 'react';
import './Pagination.css';

const get = async () => {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8b7f4e150cmsh298b5542908b4e8p16afc8jsn351a853fdce5',
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data.coins;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default function Pagination() {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await get();
            setResults(data);
        };
        fetchData();
    }, []);

    const coinsPerPage = 10;
    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    const currentCoins = results.slice(indexOfFirstCoin, indexOfLastCoin);

   
    const pageCount = Math.ceil(results.length / coinsPerPage);


    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pagination-wrapper">
            {currentCoins.map((coin) => (
                <div key={coin.id} className="coin-item">
                    {coin.name} - {coin.marketCap}
                </div>
            ))}
            <div className="pagination-controls">
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>{"<--"}</button>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>

                ))}
<button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===pageCount}>{"-->"}</button>
            </div>
        </div>
    );
}
