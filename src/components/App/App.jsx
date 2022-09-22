import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ProductList from '../ProductList/ProductList.jsx';
import ProductForm from '../ProductForm/ProductForm.jsx';


function App() {
    const [productList, setProductList] = useState([]);

    // GET request to retrieve the products in our database.
    const getProducts = () => {
        console.log('In axios GET');
        axios.get('/products')
        .then(response => {
            console.log(response.data);
            setProductList(response.data);
        })
        .catch(err => {
            console.log('error in axios GET',err);
        });
    }

    console.log(productList);

    // call getProducts once on load.
    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="App">
            <Header />
            <ProductForm/>
            <main>
                <p>Under Construction...</p>
            </main>
            <ProductList productList={productList} getProducts={getProducts}/>
        </div>
    );
}

export default App;
