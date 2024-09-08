export default async function getAllCategories() {
    const result = await fetch(
        `${process.env.base_url}/api/v1/other-products/categories`,
        {
            // next: { revalidate: 1000},
            cache: "no-cache",
        }
    );
    const data = result.json();

    if (!result.ok) {
        console.log('error during fetching data');
    } else

    return data;
}