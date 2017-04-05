import React from 'react'
import { observer } from 'mobx-react'


const Product = ({ id, name, promoted, price, currency, isSold, onBuyClick }) => {

    const handleClick = () => {
        onBuyClick(id)
    };

    const spanStyle = {
        color: promoted ? 'color' : 'red',
        textDecoration: isSold ? 'line-through' : 'none'
    };

    return (
        <div>
            {/* Here we can add some inline styling to see component changes on the UI */}
            <span style={spanStyle}>
                { name } { price } { currency }
            </span>
            <button onClick={ handleClick }>
                Buy
            </button>
        </div>
    )
};

export default observer(Product)