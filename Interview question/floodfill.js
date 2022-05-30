const fill = (image, sr, sc, newColor, current) => {
  if (sr < 0) {
    return;
  }
  if (sc < 0) {
    return;
  }
  if (sr > image.length - 1) {
    return;
  }
  if (sc > image[sr].length - 1) {
    return;
  }
  if (image[sr][sc] !== current) {
    console.log(current);
    return;
  }
  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, newColor, current);
  fill(image, sr + 1, sc, newColor, current);
  fill(image, sr, sc - 1, newColor, current);
  fill(image, sr, sc + 1, newColor, current);
};

const floodFill = function (image, sr, sc, newColor) {
  const current = image[sr][sc];
  if (current === newColor) {
    return image;
  }
  fill(image, sr, sc, newColor, current);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    0,
    1,
    2
  )
);
