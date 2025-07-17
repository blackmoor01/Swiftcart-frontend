export const api = {
  getProducts: async (): Promise<{ products: Product[] }> => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  searchProducts: async (query: string): Promise<{ products: Product[] }> => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    if (!response.ok) throw new Error("Failed to search products");
    return response.json();
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  },

  addToCart: async (productId: number): Promise<any> => {
    const response = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [{ id: productId, quantity: 1 }],
      }),
    });
    if (!response.ok) throw new Error("Failed to add to cart");
    return response.json();
  },
};
