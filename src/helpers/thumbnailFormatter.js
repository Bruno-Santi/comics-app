export const thumbnailFormatter = (thumbnail) => {
  const imagePath = `${thumbnail.path}.${thumbnail.extension}`;
  return imagePath;
};
