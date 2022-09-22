function ProductListItem({product}) {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.isPurchased}</p>
        </div>
    );
}

export default ProductListItem;