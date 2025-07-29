import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardComponent = () => {
  //products

  const [products, setProducts] = useState([]);

  const fetchData = () => {
    if (products.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((res) => setProducts(res.products));

    }
  };
  console.log(products);

  fetchData();

  return (
    <>
      <div className="container mt-2">
        <div className="row">
            {products.slice(0, 12).map((item, index) => (
                <div className="col-lg-3 mt-4" key={index}>
                    <div className="card">
                        <img src={item.thumbnail}/>
                        <div className="card-body">
                        
                          <h5 className="brand">{item.brand}</h5>
                          
                          <p>Price - {item.price} ₹</p>
                          <p>discount - {item.discountPercentage} %off</p>
                          <span className="stock">{item.availabilityStatus}</span>
                          <div className="text-end">
                          <Link to={`/product-details/${item.id}`}>
                          <button className="btn btn-outline-danger">Buy Now</button>
                          </Link>
                          </div>
                          

                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default DashboardComponent;
