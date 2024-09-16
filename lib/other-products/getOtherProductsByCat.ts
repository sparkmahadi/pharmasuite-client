import { notFound } from 'next/navigation';

export default async function getOtherProductsByCat(cat_name: string, limit: number) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/other-products/categories/${cat_name}/products?limit=${limit}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }
    const products = await res.json();

    if (!products || products.length === 0) {
      notFound();
    }

    return products;

  } catch (error) {
    console.error("Error fetching products:", error);
    notFound();
    return [];
  }
}
