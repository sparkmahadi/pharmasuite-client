import { notFound } from "next/navigation";

export default async function getMainProducts() {
    const result = await fetch(
        `${process.env.base_url}/api/v1/products/main-products`,
        {
            next: {
                revalidate: 300,
            },
        }
    );

    if (!result.ok) {
        notFound();
    }

    return result.json();
}