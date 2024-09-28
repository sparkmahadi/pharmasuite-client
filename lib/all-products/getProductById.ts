import { notFound } from 'next/navigation'
 
export default async function getProductById(id: string) {
    let res = await fetch(`http://192.168.0.104:5000/api/v1/all-products/${id}`)
    console.log(id);
    let pd = await res.json();
  if (!pd) notFound()
  return pd
}
