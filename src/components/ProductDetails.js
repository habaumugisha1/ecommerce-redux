import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import axios from 'axios'

const ProductDetails = () => {
    const {productId} = useParams();
    const dispatch = useDispatch()
    const product = useSelector(state =>state.product);
    const {image, title, price, category, description} = product
    console.log(product.data)
    const fetchProducts = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err ", err.message)
        })

        dispatch(selectedProduct(res))
    };

    useEffect(() => {
       if(productId && productId !=="") fetchProducts()

       return () => {
           dispatch(removeSelectedProduct())
       }
       
    }, [productId]);
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (<div>Loading ...</div>): (
                <div className="ui placeholder segment">
                    <div className="two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="column lp">
                            <img className="ui fluid image" src={product.data.image} />
                        </div>
                        <div className="column rp">
                        <h1>{product.data.title}</h1>
                        <h2><a className="ui teal tag label">${product.data.price}</a></h2>
                        <h3 className="ui brown block header">{product.data.category}</h3>
                        <p>{product.data.description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content">
                                <i className="shop icon"></i>
                            </div>
                            <div>Add to Cart</div>
                        </div>
                      </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
