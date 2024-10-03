import { notFound } from "next/navigation";

export default async function getMainProducts() {
    const result = await fetch(
        `${process.env.BASE_URL}/api/v1/all-products/get-all-products`,
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