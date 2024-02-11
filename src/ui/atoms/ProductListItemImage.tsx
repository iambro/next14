import { type ProductListItemImageType } from "@/types/product.types";

export const ProductListItemImage = ({ image }: { image: ProductListItemImageType }) => {
	return (
		<img
			src={image.src}
			alt={image.alt}
			className="mx-auto mb-4 h-48 w-48 transform object-cover"
		/>
	);
};
