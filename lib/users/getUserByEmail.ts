export const getUserByEmail = async (userEmail: string, setIsLoading: Function) => {
  // setIsLoading(true);
  const response = await fetch(`http://192.168.0.104:5000/api/v1/users/login?email=${userEmail}`);
  const data = await response.json();
  console.log(userEmail);
  // setIsLoading(false);
  
  return data;
};
