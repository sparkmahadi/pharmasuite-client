"use client"

import { getFavourites } from "@/lib/users/favouriteFunction";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const [favourites, setFavourites] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { _id: userId } = useSelector((state: any) => state.user.userDetails);
  // const { loading } = useSelector((state: any) => state.loader);


  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const data = await getFavourites(userId);
        console.log(data);
        if (data.success) {
          setFavourites(data.favourites);
        }
      } catch (error) {
        console.error("Error fetching favourites:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavourites();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites?.products?.length ? (
        favourites.products.map((productId: string) => (
          <div key={productId}>
            <p>Product ID: {productId}</p>
          </div>
        ))
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
};

export default Favourites;
