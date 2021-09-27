import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log("Err ", err.message)
        })

        dispatch(setProducts(res.data))
    };

    useEffect(() => {
        fetchProducts()
    }, []);


    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
