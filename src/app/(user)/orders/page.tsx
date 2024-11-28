import Container from "@/components/Container";
import Orders from "@/components/Orders";
import Title from "@/components/Title";
import React from "react";

const OrdersPage = () => {
  return (
    <Container className="py-10">
      <Title>Your Orders</Title>
      <Orders />
    </Container>
  );
};

export default OrdersPage;
