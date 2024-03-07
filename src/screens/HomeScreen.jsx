import React, { useState } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import MainLayout from "../components/Layouts/MainLayout";
import { Spinner } from "@nextui-org/react";
import { Laptop2, Shirt, TabletSmartphone } from "lucide-react";
import Mobiles from "../components/Products/Mobiles";
import Electronics from "../components/Products/Electronics";
import Fashions from "../components/Products/Fashions";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("mobiles");
  const { data: products, isLoading, isError } = useGetProductsQuery();

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
            <div className="flex gap-4 sm:gap-12 justify-center items-center mb-4">
              <button
                onClick={() => setSelectCategory("mobiles")}
                className={`flex flex-col items-center justify-center w-24 p-2 font-semibold transition-all rounded-lg duration-300 ${
                  selectCategory === "mobiles"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src="/images/choose/mobiles.webp"
                  alt="logo"
                  className="w-10 h-10"
                />
                Mobiles
              </button>
              <button
                onClick={() => setSelectCategory("electronics")}
                className={`flex flex-col items-center justify-center w-24 p-2 font-semibold transition-all rounded-lg duration-300 ${
                  selectCategory === "electronics"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src="/images/choose/electronics.webp"
                  alt="logo"
                  className="w-10 h-10"
                />
                Electronics
              </button>
              <button
                onClick={() => setSelectCategory("fashion")}
                className={`flex flex-col items-center justify-center w-24 p-2 font-semibold transition-all rounded-lg duration-300 ${
                  selectCategory === "fashion"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src="/images/choose/fashion.webp"
                  alt="logo"
                  className="w-10 h-10"
                />
                Fashion
              </button>
            </div>
            <div className="flex justify-center">
              <div className="border-b w-6/12 "></div>
            </div>
            {selectCategory === "mobiles" ? (
              <div>
                <div className="flex items-center justify-center py-4 gap-1">
                  <TabletSmartphone className="w-5" />
                  <h1 className="font-bold text-2xl ">Mobiles</h1>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full gap-4">
                  {products?.map((product, id) => (
                    <Mobiles key={id} mobile={product} />
                  ))}
                </div>
              </div>
            ) : selectCategory === "electronics" ? (
              <div>
                <div className="flex items-center justify-center py-4 gap-1">
                  <Laptop2 className="w-5" />
                  <h1 className="font-bold text-2xl ">Electronics</h1>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full gap-4">
                  <Electronics />
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-center py-4 gap-1">
                  <Shirt className="w-5" />
                  <h1 className="font-bold text-2xl ">Fashions</h1>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-full gap-4">
                  <Fashions />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default Home;
