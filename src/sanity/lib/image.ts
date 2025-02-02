import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "./client";

// Create a URL builder instance
const builder = createImageUrlBuilder(sanityClient);

// Function to get the URL of an image stored in Sanity
export const urlFor = (source: SanityImageSource) => builder.image(source);
