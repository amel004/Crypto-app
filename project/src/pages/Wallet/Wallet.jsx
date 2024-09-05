import React from 'react'
import './Wallet.css'

const Wallet = () => {
  return (
    <div className='wallet'>
      <div className='heading'>
        <div className='text'>
        <h1>
            Buy Bitcoin & <br /> Crypto
          </h1>
          <h3>
            Sign up today and <span>buy 50+</span>
            <br /> cryptotocurrencies in minutes <br />
            Get started with as little as
            <span>$10</span>
          </h3>
        </div>
  
      </div>

      <div className='wallet-img'>
        <img src="/wallet-pic.png" className='picture' />
      </div>      
    </div>
  )
}

export default Wallet

