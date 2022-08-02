import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./SharedPages/Header/Header";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
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
        <Route path="/about" element={"about"} />
        <Route path="/blog" element={"blog"} />
      </Routes>
      <h2>Name is:</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
      <h2>Navfb</h2>
    </div>
  );
}

export default App;
