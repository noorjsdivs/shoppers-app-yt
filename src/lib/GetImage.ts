export const constructImageUrl = (assetId: string) => {
  // Sanity project details (replace with your actual details)
  const projectId = "j9d7duit"; // Your project ID
  const dataset = "production"; // Your dataset name

  // Extract relevant parts from the asset ID
  const parts = assetId.split("-");
  if (parts.length < 4) return null;

  const imageId = parts[1];
  const dimensions = parts[2];
  const format = parts[3];

  // Construct the URL
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}-${dimensions}.${format}`;
};

// Example usage
// const assetId = "image-4ea7820c4642904b48db397d648d9ceb6b344b34-450x450-jpg";
// const imageUrl = constructImageUrl(assetId);
