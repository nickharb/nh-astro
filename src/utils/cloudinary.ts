export function getCloudinaryImageUrl(
  path: string,
  width: number,
  height: number,
  crop: string,
  gravity: string = "center" // Optional gravity parameter with default
) {
  const cloudName = "delsdkwhm";
  return {
    src: `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},g_${gravity},w_${width},h_${height}/${path}`,
    width,
    height,
    // placeholder: `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},w_10,h_10,e_blur:2000/${path}`,
  };
}