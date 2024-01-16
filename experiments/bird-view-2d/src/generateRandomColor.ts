function generateRandomColor() {
  return '#'.concat(
    Math.round(Math.random() * 255 ** 3)
      .toString(16)
      .padStart(6, '0'),
  );
}

export default generateRandomColor
