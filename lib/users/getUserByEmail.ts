export const getUserByEmail = async (userEmail: string) => {
  const response = await fetch(`http://192.168.0.106:5000/api/v1/users/login?email=${userEmail}`);
  const data = await response.json();
  console.log(userEmail);
  
  return data;
};
