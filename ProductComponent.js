import React from 'react';
import './ProductComponent.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
        const { id, title, price, image, category } = product;
        
        return (<div className="col-md-4">
            <Link className="product" to ={`/product/${id}`}>
            <div className="card mt-3 cardsize">

                <div className="align-items-center p-1 text-center">
                    <img src={image} className="img-fluid " width="100px" height="100px" alt="" />
                    <h6>{title}</h6>
                    <div className="info">
                        <p>{category}</p>
                        <h6>Price $ {price} </h6>
                    </div>

                </div>
            </div>
            </Link>
        </div> 
         )
         })
    return (
        <>{renderList}</>
    );
};

export default ProductComponent;
