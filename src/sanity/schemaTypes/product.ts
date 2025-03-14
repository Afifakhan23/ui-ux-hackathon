import { defineType} from "sanity";
export const productSchema = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'id', title: 'ID', type: 'string',validation: Rule => Rule.required().unique(), },
      { name: 'name', title: 'Name', type: 'string' },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name", // Auto-generate slug from the name field
          maxLength: 200,
          slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
        validation: (Rule) => Rule.required(),
      },
      
      {
        name: 'imagePath',
        title: 'Image',
        type: 'image',
        options: { hotspot: true }
      },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'discountPercentage', title: 'Discount Percentage', type: 'number' },
      { name: 'isFeaturedProduct', title: 'Is Featured Product', type: 'boolean' },
      { name: 'stockLevel', title: 'Stock Level', type: 'number' },
      { name: 'category', title: 'Category', type: 'string' },
    ],
  });
  