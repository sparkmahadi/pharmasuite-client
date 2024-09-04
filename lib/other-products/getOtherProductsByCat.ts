import { notFound } from 'next/navigation'
 
export default async function getOtherProductsByCat(cat_name: string) {
    let res = await fetch(`${process.env.base_url}/api/v1/other-products/categories/${cat_name}/products`)
    let products = await res.json();
  if (!products) notFound()
  return products
}
