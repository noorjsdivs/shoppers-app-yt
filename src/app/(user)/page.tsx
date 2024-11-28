import Container from "@/components/Container";
import React from "react";
import Banner from "@/components/Banner";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";

const Home = async () => {
  return (
    <Container className="py-10">
      <Banner />
      <Facilities />
      <ProductList />
    </Container>
  );
};

export default Home;
