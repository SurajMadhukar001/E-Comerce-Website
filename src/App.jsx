import { Routes,Route} from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/Header";
import SidebarComponents from "./Components/Sidebar";
import SignIn from "./Components/Sign-in";
import SignUp from "./Components/Sign-up";
import DashboardComponent from "./Components/Dashboard";
import ProductComponent from "./Components/Product";
import FooterComponent from "./Components/Footer";
import CountEvent from "./Components/events";
import Category from "./Components/category";
import AllProducts from "./Components/All-Products";
import SingleProduct from "./Components/Single-Product";



function App() {
  return (
    <>
      <HeaderComponent />
      {/* <SidebarComponents /> */}
  
    
      
      

      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-details/:id" element={<ProductComponent />} />
         <Route path="/category" element={<Category />} />
        <Route path="/all-products/:id" element={<AllProducts />} />
         <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
      <CountEvent/>
       <FooterComponent />
    </>
    
  );
}
         

export default App;
