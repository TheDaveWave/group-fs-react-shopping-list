import axios from "axios";
import './ProductListItem.css'
function ProductListItem({product, getProducts}) {

    const buyProduct = (productId) => {
        console.log('updating isPurchased');
        axios({
            method: 'PUT',
            url: `/products/purchase/${productId}`
        })
        .then(() => {
            getProducts();
        })
        .catch(err => {
            console.log('Error in purchasing', err);
        });
    }

    const removeProduct = (productId) => {
        console.log('removing product', productId);
        axios({
            method: 'DELETE',
            url: `/products/remove/${productId}`
        })
        .then(() => {
            getProducts();
        })
        .catch(err => {
            console.log('Error in removing', err);
        });
    }

    return (
        <div className={product.isPurchased ? 'bought-box' : 'item-box'}>
            <p>{product.name}</p>
            <p>{product.quantity} {product.unit}</p>
            {product.isPurchased ? 
            <div>Purchased</div> : 
            <div className="btn-box">
                <button className="list-btn" onClick={() => buyProduct(product.id)}>{'\u2713'}</button>
                <button className="list-btn" onClick={() => removeProduct(product.id)}>X</button>
            </div>}
        </div>
    );
}

export default ProductListItem;