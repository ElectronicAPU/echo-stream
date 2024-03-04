import React from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const Home = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : isError ? (
        <>
          <p>Fetch to get products</p>
        </>
      ) : (
        <>
          <div>
            {products?.map((product, id) => (
              <h1 key={id}>{product?.brand}</h1>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
