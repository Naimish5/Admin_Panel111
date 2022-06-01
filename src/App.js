import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './Component/Main';
import Add_Product from './Component/Product/Add_Product';
import View_product from './Component/Product/View_product';

function App() {
  return (
    <div class="wrapper">
      <Routes>
        <Route path='' element={<Main/>} />
        <Route path='/addproduct' element={<Add_Product/>} />
        <Route path='/viewproduct' element={<View_product/>} />
      </Routes>
    </div>

  );
}

export default App;
