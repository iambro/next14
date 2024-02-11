export type ProductListItemType = {
	id: number;
	name: string;
  category: string;
	price: number;
	description: string;
	image: ProductListItemImageType;
};

export type ProductListItemImageType = {
	src: string;
	alt: string;
};
