import Text, { WHITE_SPACE } from './Text';

function padEnd(text: Text, length: number, placeholder = WHITE_SPACE): Text {
  return Text(text._value.padEnd(length, placeholder));
}

export default padEnd;
