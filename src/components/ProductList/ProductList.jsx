import axios from "axios";
import ProductListItem from "./ProductListItem";

function ProductList ({productList, getProducts}) {
    // clear product list.
    const clearList = () => {
        axios.delete('/products/clear')
        .then(() => {
            console.log('products cleared');
            getProducts();
        })
        .catch(err => {
            console.log('Error in clearing list', err);
        });
    }
    
    // Reset the purchase values to false.
    const resetPurchased = () => {
        axios.put('/products/reset')
        .then(() => {
            console.log('Purchases reset!');
            getProducts();
        })
        .catch(err => {
            console.log('Error in resetting purchases', err);
        });
    }

    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={() => resetPurchased()}>Reset</button>
            <button onClick={() => clearList()}>Clear</button>
            {productList.map( product => (
                <ProductListItem key={product.id} product={product}/>
            ))}
        </>
    );
}

export default ProductList;