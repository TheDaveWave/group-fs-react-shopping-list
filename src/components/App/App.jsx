import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        console.log('In axios GET');
        axios.get('/products')
        .then(response => {
            console.log(response.data)
            setProductList(response.data);
        })
        .catch(err => {
            console.log('error in axios GET',err);
        });
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
