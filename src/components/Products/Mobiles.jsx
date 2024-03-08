import { ShoppingCart, Star } from "lucide-react";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const Mobiles = ({ mobile }) => {
  return (
    <>
      <div className="p-2 border border-gray-100 rounded-lg shadow-lg hover:shadow-none transition-all transform duration-300 ">
        <div>
          <Link to={mobile.id}>
            <img
              src={mobile.image}
              className="w-full h-full rounded-lg"
              alt="logo"
            />
            <h1 className="font-semibold text-sm py-2 sm:truncate">
              {mobile.name}
            </h1>
            <p className="sm:truncate text-sm">
              <span className="font-semibold">Description:</span>{" "}
              {mobile.description}
            </p>
            <p className="sm:truncate font-semibold text-sm mt-1">
              <span className="font-semibold">Price:</span> ${mobile.price}
            </p>
            <div className="flex gap-1 text-sm mt-1">
              <span className="font-semibold">Rating:</span> {mobile.rating}
            </div>
          </Link>
          <div className="mt-2 w-full h-10 flex gap-2">
            <button className=" w-full h-full flex justify-center items-center gap-1 rounded-lg bg-sky-100 border text-sm font-semibold">
              <ShoppingCart className="w-4" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Mobiles);
