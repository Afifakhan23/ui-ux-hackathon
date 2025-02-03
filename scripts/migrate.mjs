import "dotenv/config";
import { createClient } from "@sanity/client";
import fetch from "node-fetch";
import slugify from "slugify";

// Load environment variables
const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  BASE_URL
} = process.env;

// Validate required environment variables
if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !SANITY_AUTH_TOKEN || !BASE_URL) {
  console.error("❌ Missing required environment variables. Check your .env.local file.");
  console.log({ NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_AUTH_TOKEN, BASE_URL });
  process.exit(1);
}

// Initialize Sanity client
const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: SANITY_AUTH_TOKEN,
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    if (!imageUrl || !imageUrl.startsWith("http")) {
      console.warn("⚠️ Invalid or missing image URL:", imageUrl);
      return null;
    }
    console.log(`✅ Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    const buffer = await response.arrayBuffer();
    const uploadedAsset = await targetClient.assets.upload("image", Buffer.from(buffer), {
      filename: imageUrl.split("/").pop(),
    });

    return { _type: "image", asset: { _type: "reference", _ref: uploadedAsset._id } };
  } catch (error) {
    console.error("🚨 Error uploading image:", error.message);
    return null;
  }
}

// Check if a product exists in Sanity
async function productExists(id, name) {
  const query = `*[_type == "product" && (id == $id || name == $name)][0] { _id }`;
  const existingProduct = await targetClient.fetch(query, { id, name });
  return existingProduct ? existingProduct._id : null;
}

// Migrate data to Sanity
async function migrateData() {
  console.log("🚀 Starting data migration...");
  try {
    console.log("Fetching from:", BASE_URL);

    const productsResponse = await fetch(BASE_URL);
    if (!productsResponse.ok) throw new Error(`Failed to fetch products from ${BASE_URL}`);

    const productsData = await productsResponse.json();

    for (const product of productsData) {
      console.log(`🔍 Checking product: ${product.name}`);
      const existingProductId = await productExists(product.id, product.name);
      if (existingProductId) {
        console.log(`⚠️ Product already exists: ${product.name} (Skipping)`);
        continue;
      }

      console.log(`📦 Migrating product: ${product.name}`);
      const imageRef = product.imagePath ? await uploadImageToSanity(product.imagePath) : null;
      const slug = slugify(product.name, { lower: true, strict: true });

      const newProduct = {
        _type: "product",
        id: product.id,
        name: product.name,
        slug: { _type: "slug", current: slug },
        imagePath: imageRef,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const result = await targetClient.create(newProduct);
      console.log(`✅ Migrated product: ${product.name} (ID: ${result._id})`);
    }

    console.log("🎉 Data migration completed successfully!");
  } catch (error) {
    console.error("🚨 Error during migration:", error.message);
    process.exit(1);
  }
}

// Run migration
migrateData();

// import "dotenv/config";
// import { createClient } from "@sanity/client";
// import fetch from "node-fetch";
// import slugify from "slugify";
// const {NEXT_PUBLIC_SANITY_PROJECT_ID,
//   NEXT_PUBLIC_SANITY_DATASET,
//   SANITY_AUTH_TOKEN,
//   BASE_URL}
//    = process.env;
// // Validate required environment variables
// if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !SANITY_AUTH_TOKEN) {
//   console.error("Missing required environment variables. Please check your .env.local file.");
//   process.exit(1);
// }
// // Initialize Sanity client
// const targetClient = createClient({
//   projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
//   useCdn: false,
//   apiVersion: "2023-01-01",
//   token: SANITY_AUTH_TOKEN,
// });
// // Upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     if (!imageUrl) return null;
//     console.log(`✅ Uploading image: ${imageUrl}`);
//     const response = await fetch(imageUrl);
//     if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

//     const buffer = await response.arrayBuffer();
//     const uploadedAsset = await targetClient.assets.upload("image", Buffer.from(buffer), {
//       filename: imageUrl.split("/").pop(),
//     });
//     return { _type: "image", asset: { _type: "reference", _ref: uploadedAsset._id } };
//   } catch (error) {console.error("Error uploading image:", error.message);
//     return null;
//   }
// }
// // Function to check if a product already exists in Sanity
// async function productExists(id, name) {
//   const query = `*[_type == "product" && (id == $id || name == $name)][0] { _id }`;
//   const existingProduct = await targetClient.fetch(query, { id, name });
//   return existingProduct ? existingProduct._id : null;
// }
// // Main function to migrate data from API to Sanity
// async function migrateData() {
//   console.log("Starting data migration...");
//   try {
//     // Fetch product data from external API
//     const productsResponse = await fetch(`${BASE_URL}`);
//     if (!productsResponse.ok) throw new Error("Failed to fetch products.");
//     const productsData = await productsResponse.json();

//     for (const product of productsData) {
//       console.log(`Checking if product exists: ${product.name}`);
//       const existingProductId = await productExists(product.id, product.name);
//       if (existingProductId) {
//         console.log(`Product already exists: ${product.name} (Skipping)`);
//         continue;
//       }
//       console.log(`Migrating product: ${product.name}`);
//       // Upload product image to Sanity
//       const imageRef = product.imagePath ? await uploadImageToSanity(product.imagePath) : null;
//       // Generate slug for product name
//       const slug = slugify(product.name, { lower: true, strict: true });
//       // Create new product document for Sanity
//       const newProduct = {
//         _type: "product",
//         id: product.id,
//         name: product.name,
//         slug: { _type: "slug", current: slug },
//         imagePath: imageRef,
//         price: parseFloat(product.price),
//         description: product.description,
//         discountPercentage: product.discountPercentage,
//         isFeaturedProduct: product.isFeaturedProduct,
//         stockLevel: product.stockLevel,
//         category: product.category,
//       };
//       // Save new product to Sanity
//       const result = await targetClient.create(newProduct);
//       console.log(`✅ Migrated product: ${product.name} (ID: ${result._id})`);
//     }
//     console.log("🎉 Data migration completed successfully!");
//   } catch (error) {
//     console.error("🚨 Error during migration:", error.message);
//     process.exit(1);
//   }
// }
// // Start the migration process
// migrateData();
