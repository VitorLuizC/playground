type Color = string | CanvasGradient | CanvasPattern;

export type RenderRectangleOptions = {
  width: number;
  height: number;
  fillColor?: Color;
  positionX?: number;
  positionY?: number;
  strokeWidth?: number;
  strokeColor?: Color;
};

function renderRectangle(context: CanvasRenderingContext2D, options: RenderRectangleOptions) {
  const {
    width,
    height,
    fillColor,
    strokeColor,
    strokeWidth,
    positionX = 0,
    positionY = 0,
  } = options;

  context.save();
  context.beginPath();

  if (fillColor !== undefined) {
    context.fillStyle = fillColor;
  }

  if (strokeColor !== undefined) {
    context.strokeStyle = strokeColor;
  }

  if (strokeWidth !== undefined) {
    context.lineWidth ??= strokeWidth;
  }

  context.rect(positionX, positionY, width, height);

  if (fillColor !== undefined) {
    context.fill();
  }

  if (strokeColor !== undefined || strokeWidth !== undefined) {
    context.stroke();
  }
  context.closePath();
  context.restore();
}

export default renderRectangle
