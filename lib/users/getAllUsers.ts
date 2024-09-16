export default async function getAllUsers() {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/v1/users/all-users`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
  
      return {
        error: true,
        message: "Failed to fetch users. Please try again later.",
      };
    }
  }
  