import React, { useEffect, useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6 pt-8 px-4">
        {products.map((data) => (
          <DisplayCard key={data._id} product={data}></DisplayCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
