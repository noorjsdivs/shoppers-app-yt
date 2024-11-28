"use client";

import { MdStar } from "react-icons/md";
import { ProductData } from "../../types";
import AddToCartButton from "./AddToCartButton";
import FormattedPrice from "./FormattedPrice";

interface Props {
  product: ProductData;
}
const ProductInfo = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product?.title}</h2>
      <div className="flex items-center gap-4">
        <p className="text-lg font-normal text-gray-500 line-through">
          <FormattedPrice amount={product?.rowprice} />
        </p>
        <FormattedPrice amount={product?.price} className="text-lg font-bold" />

        <p className="text-sm">
          you saved{" "}
          <FormattedPrice
            amount={product?.rowprice - product?.price}
            className="bg-lightGreen text-white px-2 rounded-md text-xs py-1"
          />{" "}
          from this item
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-base text-lightText flex items-center">
          {Array?.from({ length: 5 })?.map((_, index) => {
            const filled = index + 1 <= Math.floor(product?.ratings);
            const halfFilled =
              index + 1 > Math.floor(product?.ratings) &&
              index < Math.ceil(product?.ratings);

            return (
              <MdStar
                key={index}
                className={`${
                  filled
                    ? "text-[#fa8900]"
                    : halfFilled
                      ? "text-[#f7ca00]"
                      : "text-lightText"
                }`}
              />
            );
          })}
        </div>
        <p className="text-sm font-semibold text-accent/60 tracking-wide">{`(5 customer reviews)`}</p>
      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>
      <p className="text-sm text-gray-500">Be the first to leave a review.</p>
      <AddToCartButton item={product} className="rounded-md py-3" />
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
