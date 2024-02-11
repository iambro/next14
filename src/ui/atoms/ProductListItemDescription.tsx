import { type ProductListItemType } from "@/types/product.types";
import { formatCurrency } from "@/utils";

export const ProductListItemDescription = ({ product }: { product: ProductListItemType }) => {
	return (
		<div className="mt-4">
			<h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
			<p className="mb-2 text-sm text-gray-500">{product.category}</p>
			<p className="mb-2 text-sm">{product.description}</p>
			<p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
		</div>
	);
};
