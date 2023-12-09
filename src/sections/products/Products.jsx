import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data/data";
import { addAllPrice } from "../../features/cart/cartSlice";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log("Products Sum: ", products.price);
  console.log("Quantity: ", products.quantity);
  return (
    <section className="products">
      <div className="container">
        <div className="single_product">
          {data.map((product, index) => {
            const { name, image, price, description } = product;
            return (
              <div className="all_products" key={index}>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Price: {price} BDT</h4>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(addAllPrice(price));
                  }}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
