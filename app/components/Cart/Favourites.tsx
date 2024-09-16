// components/Favourites.tsx
import { useState, useEffect } from "react";

const Favourites = ({ userId }: { userId: string }) => {
  const [favourites, setFavourites] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch(`/api/favourites/${userId}`);
        const data = await response.json();
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
      {favourites?.products.length ? (
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
