import { useParams} from "react-router-dom";

import { useState, useEffect} from "react";
export default function PDetail() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products/'+id)
        .then(res => res.json())
        .then(res => setProduct(res.product))
      },[])
  
    return (
      product && <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center">
          {/* Product Image Section */}
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              src={product.images[0].image}
              alt={product.name}
              height="500"
              width="500"
              className="rounded"
            />
          </div>
  
          {/* Product Details Section */}
          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Category: {product.category}</p>
  
            <hr />
  
            {/* Ratings */}
            <div className="rating-outer">
              <div className="rating-inner" style={{ width: `${product.ratings * 20}%` }}></div>
            </div>
            <p>{product.ratings} / 5</p>
  
            <hr />
  
            {/* Price */}
            <p id="product_price" className="text-success fs-4">${product.price.toFixed(2)}</p>
  
            {/* Stock Counter */}
            <div className="d-flex align-items-center">
              <button className="btn btn-danger mx-2">-</button>
              <input
                type="number"
                className="form-control count text-center w-25"
                value="1"
                readOnly
              />
              <button className="btn btn-primary mx-2">+</button>
              <button type="button" id="cart_btn" className="btn btn-primary ms-4">
                Add to Cart
              </button>
            </div>
  
            <hr />
  
            {/* Stock Status */}
            <p>
              Status: <span id="stock_status" className={`text-${product.stock > 0 ? "success" : "danger"}`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
  
            <hr />
  
            {/* Description */}
            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
  
            <hr />
  
            <p id="product_seller" className="mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }