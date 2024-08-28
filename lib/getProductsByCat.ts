import { notFound } from 'next/navigation'
 
export default async function getProductsByCat(category: string) {
    let res = await fetch(`http://localhost:5000/api/v1/categories/products/${category}`)
    let post = await res.json();
  if (!post) notFound()
  return post
}
