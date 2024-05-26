import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; 
import { Button, button } from '@material-tailwind/react'
import buttonFilled from '@material-tailwind/react/theme/components/button/buttonFilled'
import React from 'react'
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productinfo/ProductInfo";
import ScrollTop from "./components/scrolltop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct";
import Login from "./pages/registeration/Login";
import SignUp from "./pages/registeration/SignUp";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/MyState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import Category from "./components/category/Category";
import CategoryPage from "./pages/category/CategoryPage";
const App = () => {
  return (
    <div>
      <MyState>
      <Router>

        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage/>} />
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage/>
            </ProtectedRouteForAdmin>
          } />
         
        </Routes>
        <Toaster />
      </Router>
      </MyState>
    </div>
  )
}

export default App