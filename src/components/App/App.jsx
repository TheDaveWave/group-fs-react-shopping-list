import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        axios.get('/products')
        .then(response => {
            setProductList(response.data);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
