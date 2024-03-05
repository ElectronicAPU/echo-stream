import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <>
      <div className="p-2 border border-gray-100 rounded-lg shadow-lg hover:shadow-none transition-all transform duration-300 ">
        <div>
          <Link to={product.id}>
            <img
              src={product.image}
              className="w-full h-full rounded-lg"
              alt="logo"
            />
            <h1 className="font-semibold text-sm py-2 sm:truncate">
              {product.name}
            </h1>
            <p className="sm:truncate text-sm">
              <span className="font-semibold">Description:</span>{" "}
              {product.description}
            </p>
            <p className="sm:truncate font-semibold text-sm mt-1">
              <span className="font-semibold">Price:</span> ${product.price}
            </p>
          </Link>
          <div className="mt-2 w-full h-10 flex gap-2">
            <button className=" w-full h-full flex justify-center items-center gap-1 rounded-lg bg-sky-100 border text-sm font-semibold">
              <ShoppingCart className="w-4"/> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
