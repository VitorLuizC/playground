import Text from './Text';

function trimEnd(text: Text): Text {
  return Text(text._value.trimEnd());
}

export default trimEnd;
