export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  // Upload image to Sanity
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SANITY_AUTH_TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  );

  if (!response.ok) throw new Error("Failed to upload image");

  const uploadedAsset = await response.json();

  return {
    _type: "image",
    asset: { _type: "reference", _ref: uploadedAsset.document._id },
  };
}
