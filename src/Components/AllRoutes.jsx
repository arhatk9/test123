import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
// import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
// import Register from "../Pages/Register";
// import Product from "../Pages/Product";
// import Cards from "./men page/Product/Cards";
import AdminDashboard from "../Admin/AdminDashboard";
// import SingleProductPage from "../Pages/SingleProductPage";
import AddProductsPage from "../Admin/AddProductsPage";
import MensPage from "../Admin/MensPage";
import WomensPage from "../Admin/WomensPage";
import KidsPage from "../Admin/KidsPage";
import UsersPage from "../Admin/UsersPage";
import AdminProfilePage from "../Admin/AdminProfilePage";
// import Address from "../Pages/Address";
// import Wishlist from "../Pages/Wishlist";
// import Cart from "../Pages/Cart";
// import Payment from "../Pages/Payment";
// import Success from "../Pages/Success";
import { PrivateRoute } from "./PrivateRouting";
import Details from "../Pages/mensPage/Details";
import HomePage from "../Pages/mensPage/HomePage";
import Cards from "./mensPage/Product/Cards";
import ProductItem from "./mensPage/Product/ProductItem";
// import { Navbar } from '../Components/Navbar/Navbar';

const AllRoutes = () => {
  // console.log(userName);

  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/HomePage" element={<HomePage/>}></Route>
        <Route path="/details" element={ <Details/>  }></Route>
        {/* <Route path="/product" element={<Product />}></Route> */}
        
        {/* <Route path="/Cards" element={<Cards />}></Route> */}
        {/* <Route path="/product/:id" element={<SingleProductPage />}></Route> */}
        <Route
          path="/wishlist"
          // element={
          // <PrivateRoute>
          // <Wishlist />
          //</PrivateRoute>
          // }
        ></Route>
        <Route
          path="/cart"
          element={<PrivateRoute>{/* <Cart /> */}</PrivateRoute>}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/add-products" element={<AddProductsPage />}></Route>
        <Route path="/admin-men" element={<MensPage />}></Route>
        <Route path="/admin-women" element={<WomensPage />}></Route>
        <Route path="/admin-kids" element={<KidsPage />}></Route>
        <Route path="/admin-users" element={<UsersPage />}></Route>
        <Route path="/admin-profile" element={<AdminProfilePage />}></Route>
        <Route
          path="/address"
          element={<PrivateRoute>{/* <Address /> */}</PrivateRoute>}
        ></Route>
        <Route
          path="/payment"
          element={<PrivateRoute>{/* <Payment /> */}</PrivateRoute>}
        ></Route>
        <Route
          path="/success"
          element={<PrivateRoute>{/* <Success /> */}</PrivateRoute>}
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
