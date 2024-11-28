import React from "react";
import { BannerData } from "../../types";
import { getBannersData } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Button from "./Button";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice";

const Banner = async () => {
  const banners: BannerData[] = await getBannersData();
  const singleBanner = banners[0];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
      {/* Left half - single image */}
      <div className="md:col-span-2 bg-bgLight relative flex items-end justify-end rounded-lg overflow-hidden group">
        <div className="h-full z-10 absolute left-10 top-0 flex flex-col justify-center items-start gap-5 md:gap-10">
          <div className="flex flex-col gap-1 md:gap-3">
            <button className="bg-lightGreen text-white rounded-full w-20 py-1 text-sm font-semibold hover:bg-green-600 hoverEffect">
              Sale {singleBanner?.price}
            </button>
            <p className="text-xl md:text-3xl font-semibold">
              {singleBanner?.title}
            </p>
            <h2 className="text-2xl md:text-6xl font-bold">
              {singleBanner?.subtitle}
            </h2>
            <p className="text-xs md:text-sm text-black/60 font-medium max-w-44">
              {singleBanner?.description}
            </p>
          </div>
          <Button className="px-4 py-2 text-sm">Shop Now</Button>
        </div>
        <Image
          width={500}
          height={500}
          src={urlFor(singleBanner?.image).url()}
          alt={banners[0].title}
          className="object-contain h-72 md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect"
        />
      </div>

      {/* Right half - two stacked images */}
      <div className="flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]">
        {banners.slice(1, 3).map((item: BannerData) => (
          <div
            key={item._id}
            className="h-full md:h-1/2 bg-bgLight rounded-lg overflow-hidden flex justify-center items-center p-5 group"
          >
            <div className="w-1/2 flex flex-col">
              <div>
                <p className="text-2xl font-semibold">{item?.title}</p>
                <h2 className="text-3xl font-bold">{item?.subtitle}</h2>
              </div>
              <p className="mt-3 font-medium text-black/60">
                From{" "}
                <FormattedPrice
                  amount={item?.price}
                  className="text-lightRed font-bold"
                />
              </p>
              <Link
                href={"/shop"}
                className="mt-5 font-bold underline underline-offset-2 decoration-[1px] hover:text-lightRed hoverEffect"
              >
                Shop now!
              </Link>
            </div>
            <Image
              src={urlFor(item?.image).url()}
              alt={item.title}
              width={500}
              height={500}
              className="object-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
