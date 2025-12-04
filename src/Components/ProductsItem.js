import React, { useState, useContext } from "react";
import { categories } from "../Data/Products";
import { CartContext } from "../Context/CartContext";   // ✅ Import Cart Context

const ProductsItem = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);
  const [wishlist, setWishlist] = useState([]);

  const { addToCart } = useContext(CartContext);   // ✅ Access addToCart

  // Get all products based on selected category
  const allProducts = categories
    .filter(cat => activeCategory === "All" || cat.name === activeCategory)
    .flatMap(cat => cat.products);

  // Slice visible products
  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 7);
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="home-page">

      {/* Category Filter */}
      <div className="category-filter">
        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => {
            setActiveCategory("All");
            setVisibleCount(5);
          }}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.name}
            className={activeCategory === cat.name ? "active" : ""}
            onClick={() => {
              setActiveCategory(cat.name);
              setVisibleCount(5);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.id}>

            {/* Labels */}
            {product.label && (
              <span className="product-label">{product.label}</span>
            )}

            {/* Product Image */}
            <img src={product.image} alt={product.name} />

            {/* Overlay Buttons */}
            <div className="overlay">
              <button className="quick-view">Quick View</button>

              {/* ✅ Add to Cart Button (WORKING NOW) */}
              <button
                className="add-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              {/* Wishlist Button */}
              <button
                className="wishlist-btn"
                onClick={() => toggleWishlist(product.id)}
                style={{
                  background: wishlist.includes(product.id) ? "red" : "#1a73e8",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {wishlist.includes(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}
              </button>
            </div>

            {/* Product Info */}
            <h3>{product.name}</h3>
            {product.description && (
              <p className="description">{product.description}</p>
            )}
            <p className="price">{product.price}</p>

            {/* Buy Now Button */}
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < allProducts.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={loadMore}
            className="load-more"
            style={{
              padding: "10px 25px",
              background: "linear-gradient(135deg, #1a73e8, #155bb5)",
              border: "none",
              borderRadius: "25px",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Load More
          </button>
        </div>
      )}

      {/* Wishlist Count Popup */}
      {wishlist.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#fff",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Wishlist: {wishlist.length} item{wishlist.length > 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
};

export default ProductsItem;
