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
            <form>
                <input value={name} onChange = {event => (event.target.value)}></input>
                <input value={quantity} onChange ={ event => (event.target.value)}></input>
                <input value={unit} onChange={event => (event.target.value)}></input>
                <button onClick={addProduct}>Add Product</button>
            </form>

        </>
    )

}

export default ProductForm;