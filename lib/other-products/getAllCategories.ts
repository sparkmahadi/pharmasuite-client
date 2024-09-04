export default async function getAllCategories() {
    const result = await fetch(
        `${process.env.base_url}/api/v1/other-products/categories`,
        {
            // next: { revalidate: 1000},
            cache: "no-cache",
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching categories");
    }

    return result.json();
}