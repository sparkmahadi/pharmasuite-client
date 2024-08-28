export default async function getAllCategories() {
    const result = await fetch(
        "http://localhost:5000/api/v1/categories",
        {
            next: { revalidate: 10}
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching categories");
    }

    return result.json();
}