export default async function postUser(formData: any) {

  const result = await fetch(`http://192.168.0.106:5000/api/v1/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await result.json();

  return data;
}
