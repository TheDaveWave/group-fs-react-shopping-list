import axios from "axios";
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
        <div className="item-box">
            <p>{product.name}</p>
            <p>{product.quantity} {product.unit}</p>
            {product.isPurchased ? 
            <div>Purchased</div> : 
            <div>
                <button onClick={() => buyProduct(product.id)}>Buy</button>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
            </div>}
        </div>
    );
}

export default ProductListItem;