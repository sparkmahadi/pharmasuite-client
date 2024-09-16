export default async function getAllSubCategories(catName: string) {
   
  const result = await fetch(
    `${process.env.BASE_URL}/api/v1/main-products/categories/sub-categories/${catName}`
  );
  if (!result.ok) {
    throw new Error("There was an error fetching subcategories");
  }

  return result.json();
}
