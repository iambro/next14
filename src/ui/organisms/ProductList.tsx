import { type ProductListItemType } from "@/types/product.types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductListItemType[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
