import { notFound } from 'next/navigation'
 
export default async function getProductsBySubCat(cat_name: string, sub_cat_name: string) {
    let res = await fetch(`${process.env.BASE_URL}/api/v1/main-products/categories/${cat_name}/${sub_cat_name}/products`)
    let products = await res.json();
  if (!products) notFound()
  return products
}