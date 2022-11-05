import React from "react";
import { useAuth } from "./Auth";

const FeaturedProducts = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        const { id, title, img, desc, price } = menuitem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt="img" className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
