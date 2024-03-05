import React from "react";
import { Slider } from "@nextui-org/react";
import { ArrowDownUp, Filter, LibraryBig } from "lucide-react";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col gap-8 sticky top-0">
        <div>
          <div className="mb-4 flex gap-2 items-center">
            <LibraryBig className="w-5"/>
            <h1 className="font-bold text-2xl">Features</h1>
          </div>
          <div className="flex items-center gap-2 border-b pb-1">
            <Filter className="w-4" />
            <h1 className="font-bold text-sm">Filter by price</h1>
          </div>
          <div className="mt-2">
            <Slider
            size="sm"
              label="Price Range"
              step={50}
              minValue={0}
              maxValue={1000}
              defaultValue={[100, 500]}
              formatOptions={{ style: "currency", currency: "INR" }}
              className="max-w-md"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 border-b pb-1">
            <ArrowDownUp className="w-4" />
            <h1 className="font-bold text-sm">Sort by</h1>
          </div>
          <div className="mt-2">
            <select className="w-full border p-1 py-2 rounded-lg outline-none">
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="">Price</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
