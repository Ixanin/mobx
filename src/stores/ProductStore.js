import {action, observable} from 'mobx'

class ProductStore {
    @observable products = [
        {id: 0, name: 'ZApple', promoted: false, price: 122, currency: 'EUR', isSold: false},
        {id: 1, name: 'Coffee', promoted: false, price: 4, currency: 'EUR', isSold: false},
        {id: 2, name: 'Coffee', promoted: true, price: 45, currency: 'EUR', isSold: true},
        {id: 3, name: 'Wine', promoted: true, price: 7, currency: 'EUR', isSold: false}
    ]

    //4/ In strict mode we have to do changes to products inside actions
    @action buyProduct = id => {
        const productToBeSold = this.products.find(p => p.id === id);
        productToBeSold.isSold = true
    };

    @action sortByPrice = () => {
        console.log(this.products.find(p => p))
        const products = this.products.sort(function (a, b) {
            return a.name > b.name;
        });
        return products;
    }
    @action sortByName = () => {
        const products = productStore.products.sort(function (a, b) {
            return a.name > b.name;
        });
        return products;
    }
}

export default new ProductStore()
