import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"
import Main from './components/Main'

function App() {
  return (
    <div className="container mt-3">
      <Routes>
      <Route element={<Main/>} path="/"/>
      <Route element={<ProductDetail/>} path="/product/:id"/>
      </Routes>
    </div>
  );
}

export default App;
