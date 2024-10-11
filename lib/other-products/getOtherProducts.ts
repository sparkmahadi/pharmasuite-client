import { notFound } from "next/navigation";

export default async function getOtherProducts(limit = 10, page = 1) {
    try {
        const result = await fetch(
            `${process.env.BASE_URL}/api/v1/other-products?limit=${limit}&page=${page}`, {
                cache: "no-store"
            }
        );

        if (!result.ok) {
            notFound(); 
        }

        const data = await result.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        notFound();
    }
}