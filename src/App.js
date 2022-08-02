import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./SharedPages/Header/Header";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Page404 from "./SharedPages/Other/Page404/Page404";
import Footer from "./SharedPages/Footer/Footer";
import Signin from "./SharedPages/Authentication/Signin/Signin";
import Signup from "./SharedPages/Authentication/Signup/Signup";
import ForgotPass from "./SharedPages/Authentication/Signup/ForgotPass/ForgotPass";
import ProductPage from "./Pages/ProductPage/ProductPage";
import RequireAuth from "./SharedPages/Header/RequireAuth/RequireAuth";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import AddInventory from "./Pages/AddInventory/AddInventory";
import MyItems from "./Pages/MyItems/MyItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // font awesome global declear
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);
  library.add(...iconList);
  // font awesome global declear
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/login" element={<Signin></Signin>} />
        <Route path="/singup" element={<Signup></Signup>} />
        <Route path="/forgotpass" element={<ForgotPass></ForgotPass>} />
        <Route path="/inventory" element={<InventoryPage></InventoryPage>} />
        <Route path="/myitems" element={<MyItems></MyItems>} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth redirectTo="/login">
              <ProductPage />
            </RequireAuth>
          }
        />
        <Route
          path="/addinventory"
          element={
            <RequireAuth redirectTo="/login">
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404></Page404>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
