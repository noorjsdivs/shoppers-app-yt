import { getProductsData } from "@/lib/getData";
import React from "react";
import { ProductData } from "../../types";
import ProductCard from "./ProductCard";
export const revalidate = 0;
const ProductList = async () => {
  const products: ProductData[] = await getProductsData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products?.map((item) => <ProductCard item={item} key={item?._id} />)}
    </div>
  );
};

export default ProductList;
