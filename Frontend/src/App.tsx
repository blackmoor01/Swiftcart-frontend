import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cart";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
