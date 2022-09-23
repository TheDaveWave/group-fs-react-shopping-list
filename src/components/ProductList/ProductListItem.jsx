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

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.quantity} {product.unit}</p>
            {product.isPurchased ? 
            <div>Purchased</div> : 
            <div>
                <button onClick={() => buyProduct(product.id)}>Buy</button>
                <button>Remove</button>
            </div>}
        </div>
    );
}

export default ProductListItem;