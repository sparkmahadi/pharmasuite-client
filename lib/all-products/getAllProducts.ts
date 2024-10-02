import { notFound } from "next/navigation";

export default async function getAllProducts() {
    const result = await fetch(
        `${process.env.BASE_URL}/api/v1/admin/get-all-products`,
        {
            next: {
                revalidate: 1000,
            },
        }
    );

    if (!result.ok) {
        console.log("notFound() route replace")
    }

    return result.json();
}