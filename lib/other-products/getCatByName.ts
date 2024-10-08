import { notFound } from 'next/navigation'

export default async function getCatByName(cat_name: string) {
  try {
    let res = await fetch(`${process.env.BASE_URL}/api/v1/other-products/categories/${cat_name}`, { cache: "no-store" })
    let product = await res.json();
    return product;
  } catch (error) {
    console.log("notFound() route replace")
    console.log(error);
  }
}
