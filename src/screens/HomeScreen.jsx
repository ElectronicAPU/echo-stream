import React from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Products from "../components/Products";
import MainLayout from "../components/Layouts/MainLayout";

const Home = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  console.log(products);

  return (
    <MainLayout>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full gap-4">
            {products?.map((product, id) => (
              <Products key={id} product={product} />
            ))}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default Home;
