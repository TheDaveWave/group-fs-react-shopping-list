import { useState, useEffect } from "react";
import axios from "axios";

function ProductForm ({getProducts}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    function addProduct(){
        axios({
            method: 'Post',
            url: '/products/',
            data: {
                name: name,
                quantity: quantity,
                unit: unit
            }
        }).then(() => {
            console.log('POST new product succcessful!')
            // fetch updated list
            getProducts();

            // clear form
            setName('');
            setQuantity('');
            setUnit('');
        }).catch(err => alert(err));


    }
    
    
    return(
        <>
            <form onSubmit={addProduct}>
                <label htmlFor="nameIn">Product Name:</label>
                <input id="nameIn" value={name} onChange = {event => setName(event.target.value)}/>
                <label htmlFor="quantityIn">Quantity:</label>
                <input id="quantityIn" value={quantity} onChange ={ event => setQuantity(event.target.value)}/>
                <label htmlFor="unitIn">Unit:</label>
                <input id="unitIn" value={unit} onChange={event => setUnit(event.target.value)}/>
                <button >Add Product</button>
            </form>
        </>
    )

}

export default ProductForm;