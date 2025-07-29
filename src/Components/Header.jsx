// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import headerbanner from "../assets/hb.jpg";
import headerimage from "../assets/lo.jpg.png"

const HeaderComponent = () => {
  //calling store
  // const counterslice = useSelector((state)=>state.counter)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-xxl">
          <img className="logo" src={headerimage} height={100} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link home" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link about" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link category" to="/category">
                  Category
                </Link>
              </li>
              
            </ul>

            <div className="input-group ms-auto me-auto sc">
              <input
                type="text"
                className="form-control w-50"
                id="autoSizingInputGroup"
                placeholder="Try Saree,Kurti or Search by Product Code"
              />
              <div className="input-group-text sg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
            <div className="pf mt-1 ms-auto me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p>Profile</p>
            </div>
            <div className="ct mt-1 me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <p>Cart</p>
            </div>
            <div className="wt mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
              <p>Wishlist</p>
            </div>

            <div>
           
              <Link to="/sign-in">
                <button className="btn btn-outline-dark">Sign In</button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-outline-dark ms-2">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <ul className="nav menu">
        <li className="nav-item menu-item">
          <Link className="nav-link" to="#">
            Men
          </Link>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <ul className="child">
                  <h6 className="heading1">Top Wear</h6>
                  <li>All Top Wear</li>
                  <li>Tshirts</li>
                  <li>Shirts</li>
                  <li>Winter Wear</li>
                  <li>Jackets</li>
                  <li>Sweater & Sweatshirts</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item menu-item">
          <Link className="nav-link" to="#">
            Women
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>

        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Kids
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Jewellery
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Home & Kitchen
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Bag & Footwear
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Beauty & Health
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
        <li class="nav-item menu-item">
          <Link class="nav-link" to="#">
            Accessories
          </Link>
          <ul className="child">
            <li>T-shirt</li>
            <li>Jacket</li>
            <li>Jeans</li>
            <li>Sweater</li>
            <li>Watch</li>
            <li>kurta</li>
            <li>Shoes</li>
          </ul>
        </li>
      </ul>
      <div className="container-fluid">
        <img src={headerbanner} className="w-100" alt="#" />
      </div>
    </>
  );
};
export default HeaderComponent;
