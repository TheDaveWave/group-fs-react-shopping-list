import { useState, useEffect } from "react";
import axios from "axios";
import './ProductForm.css'

function ProductForm ({getProducts}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    function addProduct(){
        axios({
            method: 'Post',
            url: '/products/',
            data: {
                name: name.charAt(0).toUpperCase() + name.slice(1),
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
            
            <div id="productForm">
                <form onSubmit={addProduct}>
                    <label htmlFor="nameIn">Product Name:</label>
                    <input id="nameIn" type ="text" value={name} onChange = {event => setName(event.target.value)} required/>
                    <label htmlFor="quantityIn">Quantity:</label>
                    <input id="quantityIn" value={quantity} type="number" onChange ={ event => setQuantity(event.target.value)} required/>
                    <label htmlFor="unitIn">Unit:</label>
                    <input id="unitIn" value={unit} type="text" onChange={event => setUnit(event.target.value)} required/>
                    <button >Add Product</button>
                </form>
            </div>
        
        </>
    )

}

export default ProductForm;