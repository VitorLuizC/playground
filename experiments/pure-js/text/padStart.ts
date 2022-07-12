import Text, { WHITE_SPACE } from './Text';

function padStart(text: Text, length: number, placeholder = WHITE_SPACE): Text {
  return Text(text._value.padStart(length, placeholder));
}

export default padStart;
