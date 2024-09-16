export default async function postUser(formData: any) {

  const result = await fetch(`${process.env.BASE_URL}/api/v1/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await result.json();

  return data;
}
