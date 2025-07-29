import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../slice/product-slice";

const AllProducts = () => {
  const { id } = useParams();
  const catId = parseInt(id);
  const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.allProducts);
  const allProducts = productsStore.value || [];
  console.log(allProducts)

  useEffect(() => {
    dispatch(getAllProducts(catId));
  }, [dispatch]);


  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <h1 className="text-center text-primary mb-3 text-uppercase">
            <b>All Products</b>
          </h1>
          {allProducts.map((item, index) => (
            <div className="col-lg-3 mb-3" key={index}>
              <div className="card h-100">
                <img
                  src={item.image ?? item.images[0]}
                  alt="Image"
                  height={200}
                />
                <div className="card-body">
                  <p className="text-dark text-center">
                    <b>{item.title}</b>
                  </p>
                  <h4 className="text-success">
                    <b>
                      <span className="me-4 ms-3">Price-</span>
                      <span className="ms-5">${item.price}/-</span>
                    </b>
                  </h4>
                </div>
                <div className="card-footer">
                  <Link to={`/singleProduct/${item.id}`}>
                    <button className="btn btn-outline-danger btn-sm w-100">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
