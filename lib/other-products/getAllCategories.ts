export default async function getAllCategories() {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/v1/other-products/categories`, {
        // Optional revalidate for Next.js if needed: next: { revalidate: 1000 },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);

      return {
        error: true,
        message: "Failed to fetch categories. Please try again later.",
      };
    }
  }
  