function ProductListItem({product}) {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.isPurchased ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default ProductListItem;