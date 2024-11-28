export interface BannerData {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
  subtitle: string;
  price: number;
  description: string;
}

type ImageAsset = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type Slug = {
  current: string;
  _type: "slug";
};

type Category = {
  _id: string;
  name: string;
};

export interface ProductData {
  title: string;
  image: ImageAsset;
  quantity: number;
  price: number;
  category: Category[];
  slug: Slug;
  _createdAt: string;
  description: string;
  _updatedAt: string;
  ratings: number;
  brand: string;
  _type: "product";
  _id: string;
  position: string;
  rowprice: number;
}

export interface StoreState {
  shoppers: {
    cart: ProductData[];
  };
}
