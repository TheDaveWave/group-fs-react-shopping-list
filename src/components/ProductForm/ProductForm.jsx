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
            
            <div id="productForm">
                <form onSubmit={addProduct}>
                    <label htmlFor="nameIn">Product Name:</label>
                    <input placeholder ="Oreos" id="nameIn" type ="text" value={name} onChange = {event => setName(event.target.value)} required/>
                    <label htmlFor="quantityIn">Quantity:</label>
                    <input placeholder="15" id="quantityIn" value={quantity} type="number" onChange ={ event => setQuantity(event.target.value)}/>
                    <label htmlFor="unitIn">Unit:</label>
                    <input placeholder="Sleeves" id="unitIn" value={unit} type="text" onChange={event => setUnit(event.target.value)}/>
                    <button >Add Product</button>
                </form>
            </div>
        
        </>
    )

}

export default ProductForm;