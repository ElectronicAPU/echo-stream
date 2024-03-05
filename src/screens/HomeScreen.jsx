import React from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Products from "../components/Products";
import MainLayout from "../components/Layouts/MainLayout";
import { Spinner } from "@nextui-org/react";
import { PackageSearch } from "lucide-react";

const Home = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  console.log(products);

  return (
    <MainLayout>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : isError ? (
        <>
          <p>Fetch to get products</p>
        </>
      ) : (
        <>
          <div className="w-full h-full">
            <div className="flex gap-2 items-center mb-4">
              <PackageSearch className="w-5"/>
              <h1 className="font-bold text-2xl ">Products</h1>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full gap-4">
              {products?.map((product, id) => (
                <Products key={id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default Home;
