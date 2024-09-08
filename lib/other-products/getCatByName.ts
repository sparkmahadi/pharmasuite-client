import { notFound } from 'next/navigation'
 
export default async function getCatByName(cat_name: string) {
    let res = await fetch(`${process.env.base_url}/api/v1/other-products/categories/${cat_name}`, {cache: "no-store"})
    let product = await res.json();
  if (!product) notFound()
  return product
}
