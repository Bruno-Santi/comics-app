export const thumbnailFormatter = (thumbnail) => {
  if (!thumbnail) return null;
  const imagePath = `${thumbnail.path}.${thumbnail.extension}`;
  return imagePath;
};
