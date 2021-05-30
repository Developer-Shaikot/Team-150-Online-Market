import React from 'react';
import './ProductComponent.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const imageStyle = { width:'50%', margin: "10px auto", padding: "10px auto", borderRedius: "100px"}

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;


        return (
            <div className=" col-md-3" key={id}>
                <Link className="product" to ={`/product/${id}`}>
            <div className="product">
            <div className="ui link container justify-content-center mt-5  px-2">
                <div className="card m-2">
                    <div className="image">
                        <img style={imageStyle} src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </div>
            </Link>
        </div>
        );
    })

    return (
        <>{renderList}</>
    );
};

export default ProductComponent;