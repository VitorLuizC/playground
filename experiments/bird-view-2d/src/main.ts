import generateRandomColor from './generateRandomColor';
import Shinsu, { TransformMatrix } from './shinsu';
import waitForDocumentToBeReady from './waitForDocumentToBeReady';

await waitForDocumentToBeReady(window.document);

const canvas = window.document.createElement('canvas');

// 720p
canvas.width = 1280;
canvas.height = 720;

window.document.body.appendChild(canvas);

const context = canvas.getContext('2d');

if (!context) {
  throw new Error("Coudn't get <canvas /> context.");
}

let matrix: TransformMatrix = [
  [1, 0.2, 0.8],
  [1, 0, 0],
];

const rectangles = new Shinsu()
  .rectangle({
    positionX: 0,
    positionY: 0,
    width: canvas.height / 2,
    height: canvas.height / 2,
    fillColor: generateRandomColor(),
  })
  .rectangle({
    positionX: canvas.height / 2,
    positionY: 0,
    width: canvas.height / 2,
    height: canvas.height / 2,
    fillColor: generateRandomColor(),
  })
  .rectangle({
    positionX: 0,
    positionY: canvas.height / 2,
    width: canvas.height / 2,
    height: canvas.height / 2,
    fillColor: generateRandomColor(),
  })
  .rectangle({
    positionX: canvas.height / 2,
    positionY: canvas.height / 2,
    width: canvas.height / 2,
    height: canvas.height / 2,
    fillColor: generateRandomColor(),
  });

new Shinsu().transform(matrix, rectangles).render(context);

const form = window.document.createElement('form');

form.innerHTML = `
  <fieldset>
    <legend>Transform</legend>
    <input type="range" min="-1" max="1" step="0.1" value="1" />
    <input type="range" min="-1" max="1" step="0.1" value="0.2" />
    <input type="range" min="-1" max="1" step="0.1" value="0.8" />
    <input type="range" min="-1" max="1" step="0.1" value="1" />
    <input type="range" min="-${canvas.height / 2}" max="${canvas.height / 2}" step="0.1" value="0" />
    <input type="range" min="-${canvas.height / 2}" max="${canvas.height / 2}" step="0.1" value="0" />
  </fieldset>
`;

window.document.body.appendChild(form);

Array.from(form.querySelectorAll('input')).forEach((input, index) => {
  input.addEventListener('change', function () {
    const value = Number.parseFloat(this.value);
    if (index <= 2) {
      matrix[0][index] = value;
    } else {
      matrix[1][index - 3] = value;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    console.group('Matrix')
    console.log('(', ...matrix[0], ')');
    console.log('(', ...matrix[1], ')');
    console.groupEnd()
    new Shinsu().transform(matrix, rectangles).render(context);
  });
});

export {};
