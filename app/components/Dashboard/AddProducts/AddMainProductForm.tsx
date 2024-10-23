// import { useState } from "react";
// import ImageUpload from "./ImageUpload"; // Import ImageUpload component


// export default function AddMainProductForm() {
//   const [productData, setProductData] = useState({
//     item_desc: "",
//     generic_name: "",
//     manufacturers: "",
//     images: [{}],
//     // ... other product fields
//   });

//   // Handle form data change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setProductData({
//       ...productData,
//       [name]: value,
//     });
//   };

//   // Handle image upload complete
//   const handleImageUploadComplete = (url: string) => {
//     setProductData({
//       ...productData,
//       images: [{ img: url }],
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productData),
//       });

//       if (response.ok) {
//         console.log("Product added successfully!");
//       } else {
//         console.error("Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Product Description</label>
//           <textarea
//             name="item_desc"
//             value={productData.item_desc}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-md p-2"
//             placeholder="Enter product description"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Generic Name</label>
//           <input
//             name="generic_name"
//             value={productData.generic_name}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-md p-2"
//             placeholder="Enter generic name"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Manufacturers</label>
//           <input
//             name="manufacturers"
//             value={productData.manufacturers}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border rounded-md p-2"
//             placeholder="Enter manufacturers"
//           />
//         </div>

//         {/* Image Upload Component */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//           <ImageUpload onUploadComplete={handleImageUploadComplete} />
//         </div>

//         {productData.images.length > 0 && (
//           <div className="mb-4">
//             <img
//               src={productData.images[0].img}
//               alt="Uploaded Product"
//               className="w-32 h-32"
//             />
//           </div>
//         )}

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Submit Product
//         </button>
//       </form>
//     </div>
//   );
// }
