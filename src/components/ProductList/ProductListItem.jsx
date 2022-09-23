function ProductListItem({product}) {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.quantity} {product.unit}</p>
            {product.isPurchased ? 
            <div>Purchased</div> : 
            <div>
                <button>Buy</button>
                <button>Remove</button>
            </div>}
        </div>
    );
}

export default ProductListItem;