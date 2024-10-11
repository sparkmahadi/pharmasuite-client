import { notFound } from "next/navigation";

export default async function getAllProducts(limit = 10, page = 1) {
console.log('all products api call');
    try {
        const result = await fetch(
            `${process.env.BASE_URL}/api/v1/all-products/get-all-products?limit=${limit}&page=${page}`, {
                cache: "no-store"
            }
        );

        if (!result.ok) {
            // Handling 404 and other errors by navigating to the notFound page
            notFound(); 
        }

        const data = await result.json();  // Await the JSON data here
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        notFound(); // Navigate to the notFound page if there's a fetch error
    }
}
