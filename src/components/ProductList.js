import React from 'react'
import { observer } from 'mobx-react'
import Product from './Product'
import productStore from '../stores/ProductStore'
import Sorting from './Sorting'

@observer
class ProductList extends React.Component {

    handleBuyClick = id => {
        productStore.buyProduct(id)
    };

    handleSort = () => {
        productStore.sortByPrice()
    };

    handleSortByName = () => {
        productStore.sortByName()
    };

    render() {
        return (
            <div className="">
                <Sorting onSortClick={ this.handleSort }/>
                <Sorting onSortClick={ this.handleSortByName }/>
                <ul>
                    { productStore.products.map(p => (
                        <li key={ p.id }>
                            <Product
                                id={ p.id }
                                name={ p.name }
                                promoted={p.promoted}
                                price={p.price}
                                currency={p.currency}
                                isSold={p.isSold}
                                onBuyClick={ this.handleBuyClick }
                            />
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
}

export default ProductList

