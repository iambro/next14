import { type ProductListItemType } from "@/types/product.types";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";

export const ProductListItem = ({ product }: { product: ProductListItemType }) => {
	return (
		<li
			key={product.id}
			className="transform cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition duration-300 hover:scale-105 hover:shadow-lg"
		>
			<article className="p-4">
				<ProductListItemImage image={product.image} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
