// import { useState } from "react";

// export default function ImageUpload() {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", "Client-ID 375d92934ae56d6"); // Replace with your Imgur Client-ID

//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://api.imgur.com/3/image", {
//         method: "POST",
//         headers: myHeaders,
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to upload image");
//       }

//       const result = await response.json();
//       if (result.success) {
//         const uploadedImageUrl = result.data.link;
//         setImageUrl(uploadedImageUrl);
//       } else {
//         throw new Error("Image upload failed.");
//       }
//     } catch (err:any) {
//       console.error("Error uploading image:", err);
//       setError(err.message || "Error uploading image.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto p-4">
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//         <input
//           type="file"
//           onChange={handleImageUpload}
//           className="mt-1 block w-full border rounded-md p-2"
//           disabled={loading}
//         />
//         {loading && <p className="text-blue-500">Uploading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//       </div>

//       {imageUrl && (
//         <div className="mt-4">
//           <p className="text-sm text-gray-500">Uploaded Image:</p>
//           <img src={imageUrl} alt="Uploaded" className="w-full h-auto" />
//           <p className="text-xs text-gray-500 mt-2">Image URL: {imageUrl}</p>
//         </div>
//       )}
//     </div>
//   );
// }
