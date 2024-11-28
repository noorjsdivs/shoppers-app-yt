import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import React from "react";

const ShopPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-2xl font-semibold mb-5">
        All Available product list:
      </h2>
      <ProductList />
    </Container>
  );
};

export default ShopPage;
