// src/lib/fetchProduct.ts
import { sanityClient, urlFor } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function FetchProducts(slug: string) {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      imagePath,
      price,
      description,
      category
    }
  `;
  return await sanityClient.fetch(query, { slug });
}
