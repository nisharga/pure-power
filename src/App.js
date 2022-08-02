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
        <Route path="*" element={<Page404></Page404>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
