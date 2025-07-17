import { useState } from "react";
import Header from "../components/header/Header";
import ProductGallery from "../components/product/ProductGallery";
import ProductDetail from "../components/product/ProductDetail";
// import { useCart } from "../components/cart";
import type { Product } from "../lib/types";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // const { cart, dispatch } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <ProductGallery onProductSelect={setSelectedProduct} />
        )}
      </main>
    </div>
  );
};

export default Home;
