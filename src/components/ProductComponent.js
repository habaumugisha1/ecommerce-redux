import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    console.log(products)

    return (
        <div className="container">
            {products.map((product) => (
                <div className="four column wide" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <div className="ui link cards">
                    <div className="image"><img src={product.image} alt={product.title}/></div>
                    <div className="content">
                        <div className="header">{product.title}</div>
                        <div className="header">${product.price}</div>
                        <div className="header">{product.category}</div>
                    </div>
                    </div>
                    </Link>
                </div>
            ))
            }
        </div>
    );
    
}

export default ProductComponent
