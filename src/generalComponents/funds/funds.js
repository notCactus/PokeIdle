import React from 'react'

function Funds({coins, poke, great, ultra}){
    return <div className="funds">
            <p>{`Coins: ${coins}`}</p>
            <p>{`Poké Balls: ${poke}`}</p>
            <p>{`Great Balls: ${great}`}</p>
            <p>{`Ultra Balls: ${ultra}`}</p>
        </div>
} export default Funds;