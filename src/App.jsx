// src/App.js
import React from "react";
import "./index.css";

const Text = ({ children, fontSize, color, textAlign }) => {
  const style = {
    fontSize: fontSize || "2rem",
    color: color || "#333",
    textAlign: textAlign || "left",
    marginBottom: "1rem",
  };

  return <h1 style={style}>{children}</h1>;
};

const ProductCard = ({ price, quantity, name, description, color }) => {
  const style = {
    border: `2px solid ${color || "#4CAF50"}`,
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "300px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.3s",
  };

  return (
    <div style={style} className="product-card">
      <h2 style={{ color: color || "#4CAF50" }}>{name}</h2>
      <p>{description}</p>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Price: ${price}</p>
      <p style={{ fontWeight: "bold" }}>Quantity: {quantity}</p>
    </div>
  );
};

const Button = ({ backgroundColor, width, height, children }) => {
  const style = {
    backgroundColor: backgroundColor || "#FF5733",
    width: width || "150px",
    height: height || "50px",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition:
      "background-color 0.3s, transform 0.2s, text-decoration 0.2s, box-shadow 0.3s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <button
      style={style}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#C0392B";
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.textDecoration = "underline";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 87, 51, 0.7)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor || "#FF5733";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.textDecoration = "none";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Text fontSize="3rem" color="#2C3E50" textAlign="center">
        Welcome to Gio's Store
      </Text>

      <ProductCard
        price={29.99}
        quantity={3}
        name="Cool Gadget"
        description="This is a very cool gadget with lots of features!"
        color="#4CAF50"
      />

      <Button backgroundColor="#FF5733" width="180px" height="50px">
        Buy Now
      </Button>
    </div>
  );
}

export default App;
