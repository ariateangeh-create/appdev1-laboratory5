import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "12px",
      }}
    >
      <h3>{product.title}</h3>

      {product.popular && <p>⭐ Popular</p>}

      <p
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        Price: ${product.price.toFixed(2)}
      </p>

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartStatus, setCartStatus] = useState(0);

  function handleAddToCart() {
    setCartStatus(cartStatus + 1);
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      <p>
        {cartStatus === 0
          ? "Cart is empty"
          : `You have ${cartStatus} items in your cart`}
      </p>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}