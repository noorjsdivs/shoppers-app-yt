import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellersQuery, productsQuery } from ".";

export const revalidate = 0;

const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};

const getProductsData = async () => {
  const productsData = await client.fetch(productsQuery);
  return productsData;
};

const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};

export { getBannersData, getProductsData, getBestSellersData };
