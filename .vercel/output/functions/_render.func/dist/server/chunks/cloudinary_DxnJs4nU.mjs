function getCloudinaryImageUrl(path, width, height, crop, gravity = "center") {
  const cloudName = "delsdkwhm";
  return {
    src: `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},g_${gravity},w_${width},h_${height}/${path}`,
    width,
    height
    // placeholder: `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},w_10,h_10,e_blur:2000/${path}`,
  };
}

export { getCloudinaryImageUrl as g };
