import { FavData } from "@/types/cartData";

export const getFavourites = async (userId: string) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/favourites/${userId}`);
    const data = await response.json();
    console.log('favadata',data);
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching favourites:", error);
  }
};

export const addToFavourites = async (favData: FavData) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/v1/favourites/add-to-favourites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favData),
      }
    );
    const result = await response.json();
    if (response.ok) {
      console.log("Added to favourites:", result);
    } else {
      console.error("Error adding to favourites:", result.message);
    }
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      success: false,
      message: "An error occurred while adding to favourites",
    };
  } finally {
    // setIsAdding(false);
  }
};