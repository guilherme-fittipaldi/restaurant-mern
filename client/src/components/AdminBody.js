import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function AdminBody() {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {products.map((product) => (
            <Card key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminBody;
