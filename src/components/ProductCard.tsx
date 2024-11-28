import React from "react";
import { ProductData } from "../../types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MdStar } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ item }: { item: ProductData }) => {
  return (
    <div
      key={item?._id}
      className="border border-px border-lightText/40 rounded-md relative group overflow-hidden"
    >
      <div className="overflow-hidden">
        <Link href={`/product/${item?.slug?.current}`}>
          <Image
            src={urlFor(item?.image)?.url()}
            alt={item?._type}
            width={500}
            height={500}
            className="w-full h-72 object-cover group-hover:scale-105 hoverEffect"
          />
        </Link>
      </div>
      <div className="px-6 flex flex-col items-center gap-2">
        <div className="text-base text-lightText flex items-center">
          {Array?.from({ length: 5 })?.map((_, index) => {
            const filled = index + 1 <= Math.floor(item?.ratings);
            const halfFilled =
              index + 1 > Math.floor(item?.ratings) &&
              index < Math.ceil(item?.ratings);

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
        <p className="uppercase text-xs font-medium text-lightOrange">
          {item?.brand}
        </p>
        <h2 className="text-base font-semibold text-accent line-clamp-1">
          {item?.title}
        </h2>
        <p className="text-center text-sm line-clamp-2">{item?.description}</p>
        <div className="flex items-center gap-3 mb-5">
          <p className="text-lightText line-through">
            <FormattedPrice amount={item?.rowprice} />
          </p>
          <p className="text-darkOrange font-bold">
            <FormattedPrice amount={item?.price} />
          </p>
        </div>
      </div>
      <AddToCartButton item={item} />
    </div>
  );
};

export default ProductCard;
