export const getUserByEmail = async (userEmail: string, setIsLoading: Function) => {
  // setIsLoading(true);
  const response = await fetch(`${process.env.BASE_URL}/api/v1/users/login?email=${userEmail}`);
  const data = await response.json();
  console.log(userEmail);
  // setIsLoading(false);
  
  return data;
};
