import { type ProductListItemType } from "@/types/product.types";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Home() {
	const products: ProductListItemType[] = [
		{
			id: 1,
			name: "Product 1",
			price: 100,
			category: "T-shirt",
			description: "Description for product 1",
			image: {
				src: "/product1.jpg",
				alt: "Product 1",
			},
		},
		{
			id: 2,
			name: "Product 2",
			price: 200,
			category: "hoodie",
			description: "Description for product 2",
			image: {
				src: "/product2.jpg",
				alt: "Product 2",
			},
		},
		{
			id: 3,
			name: "Product 3",
			price: 300,
			category: "jacket",
			description: "Description for product 3",
			image: {
				src: "/product3.jpg",
				alt: "Product 3",
			},
		},
		{
			id: 4,
			name: "Product 4",
			price: 400,
			category: "pants",
			description: "Description for product 4",
			image: {
				src: "/product4.jpg",
				alt: "Product 4",
			},
		},
	];

	return (
		<main className="min-h-screen bg-gray-50">
			<div className="container mx-auto py-8">
				<h1 className="mb-8 text-center text-3xl font-semibold">Welcome to Next JS Store</h1>
				<ProductList products={products} />
			</div>
		</main>
	);
}
