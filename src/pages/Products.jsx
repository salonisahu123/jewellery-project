import FilterBar from "../components/products/FilterBar";
import ProductGrid from "../components/products/ProductGrid";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

const Products = () => {
  const { category } = useParams();
const [showSort, setShowSort] = useState(false);
const [sortBy, setSortBy] = useState("Best Matches");
  const filteredProducts =
    category === "all-jewellery"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <>

      <div className="max-w-7xl mx-auto px-8 py-8 pt-40">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif capitalize">
              {category.replace("-", " ")}
            </h1>

            <p className="text-gray-500 mt-2">
              {filteredProducts.length} Results
            </p>
          </div>

          <div className="relative">
  <button
    onClick={() => setShowSort(!showSort)}
    className="border rounded-full px-6 py-3 w-56 flex justify-between items-center bg-white"
  >
    <span>{sortBy}</span>
    <span>▼</span>
  </button>

  {showSort && (
    <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border p-6 z-50">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif">Sort By</h2>

        <button
          onClick={() => setShowSort(false)}
          className="text-2xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-5">

        <button
          onClick={() => {
            setSortBy("Best Sellers");
            setShowSort(false);
          }}
          className="block w-full text-left hover:text-[#B8860B]"
        >
          Best Sellers
        </button>

        <button
          onClick={() => {
            setSortBy("New Arrivals");
            setShowSort(false);
          }}
          className="block w-full text-left hover:text-[#B8860B]"
        >
          New Arrivals
        </button>

        <button
          onClick={() => {
            setSortBy("Recommendations");
            setShowSort(false);
          }}
          className="block w-full text-left hover:text-[#B8860B]"
        >
          Recommendations
        </button>

        <hr />

        <button
          onClick={() => {
            setSortBy("Best Matches");
            setShowSort(false);
          }}
          className="block w-full text-left text-red-700 font-semibold"
        >
          Best Matches
        </button>

        <button
          onClick={() => {
            setSortBy("Price : Low To High");
            setShowSort(false);
          }}
          className="block w-full text-left hover:text-[#B8860B]"
        >
          Price : Low To High
        </button>

        <button
          onClick={() => {
            setSortBy("Price : High To Low");
            setShowSort(false);
          }}
          className="block w-full text-left hover:text-[#B8860B]"
        >
          Price : High To Low
        </button>

      </div>

    </div>
  )}
</div>
        </div>

        <FilterBar />

        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
};

export default Products;