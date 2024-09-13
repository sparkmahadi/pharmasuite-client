export default async function getAllCategories() {
    try {
      const response = await fetch(`${process.env.base_url}/api/v1/other-products/categories`, {
        // Optional revalidate for Next.js if needed: next: { revalidate: 1000 },
      });
  
      // Check if the response is not OK (e.g., status 404, 500, etc.)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse and return the result as JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
  
      // Optional: return a fallback value or rethrow the error
      return {
        error: true,
        message: "Failed to fetch categories. Please try again later.",
      };
    }
  }
  