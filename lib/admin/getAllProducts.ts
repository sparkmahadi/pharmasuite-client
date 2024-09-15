import { notFound } from "next/navigation";

export default async function getAllProducts() {
    const result = await fetch(
        `${process.env.base_url}/api/v1/admin/get-all-products`,
        {
            next: {
                revalidate: 1000,
            },
        }
    );

    if (!result.ok) {
        notFound();
    }

    return result.json();
}