import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  amount: number;
  className?: string;
}

const FormattedPrice = ({ amount, className }: Props) => {
  const priceFormat = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return <span className={twMerge("text-base", className)}>{priceFormat}</span>;
};

export default FormattedPrice;
