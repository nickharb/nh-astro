export function getCloudinaryImageUrl(
  path: string,
  width: number,
  height: number,
  crop: string,
  gravity: string = "center" // Optional gravity parameter with default
) {
  const cloudName = "delsdkwhm";

  // Check if the path is a full URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    // Extract the base URL and append transformation parameters
    const urlParts = path.split("/upload/");
    if (urlParts.length === 2) {
      const [baseUrl, imagePath] = urlParts;
      return {
        src: `${baseUrl}/upload/c_${crop},g_${gravity},w_${width},h_${height}/${imagePath}`,
        width,
        height,
      };
    }
    // If the URL doesn't match the expected Cloudinary structure, return it as-is
    return {
      src: path,
      width,
      height,
    };
  }

  // Otherwise, treat it as a Cloudinary path fragment
  return {
    src: `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},g_${gravity},w_${width},h_${height}/${path}`,
    width,
    height,
  };
}