import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../slice/category-slice";
import { Link } from "react-router-dom";

const Category = () => {
  const categorySlice = useSelector((state) => state.category);
  const allCategory = categorySlice.value || [];
  console.log(categorySlice.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-conten-center mt-5 mb-5">
          <h1 className="text-center text-primary mb-3 textuppercase">
            <b>All Category</b>
          </h1>
          {allCategory.slice(0, 4).map((item, index) => (
            <div className="col-lg-3 mb-3" key={index}>
              <div className="card">
                <img src={item.image} alt="Image" height={200} />
                <h4 className="text-success text-center">
                  <b>{item.name}</b>
                </h4>
                <div className="card-footer">
                  <Link to={`/all-products/${item.id}`}>
                    <button className="btn btn-outline-primary btn-sm w-100">
                      Explore Now
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

export default Category;
