import renderRectangle, { RenderRectangleOptions } from './renderRectangle';

type ShinsuCommand = (context: CanvasRenderingContext2D) => void;

export type TransformMatrix = [
  [number, number, number],
  [number, number, number],
]

class Shinsu {
  private _commands = [] as ShinsuCommand[];

  rectangle(options: RenderRectangleOptions) {
    this._commands.push((context) => renderRectangle(context, options));

    return this;
  }

  transform(
    matrix: TransformMatrix,
    shinsu: Shinsu,
  ) {
    this._commands.push((context) => {
      context.save();
      context.transform(...matrix[0], ...matrix[1]);
      shinsu.render(context);
      context.restore();
    });

    return this;
  }

  render(context: CanvasRenderingContext2D) {
    this._commands.forEach((command) => command(context));
  }
}

export default Shinsu;
