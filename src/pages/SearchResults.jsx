import React from "react";
import products from "../data/products";
import ItemCard from "../components/ItemCard";

function SearchResults({ query }) {
  // Your logic to filter and render search results based on the query

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative max-w-[1450px] mx-auto mt-28 px-4">
      <h4 className="my-4 tracking-tighter">
        Searching for "
        <h2 className="inline font-bold">{query.toUpperCase()}</h2>"
      </h4>
      <div className="flex flex-wrap gap-2 xl:gap-1.5">
        {filteredProducts.map((i) => (
          <ItemCard
            src={i.src}
            itemName={i.name}
            color={i.color}
            cost={i.price}
            id={i.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
