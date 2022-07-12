import Text from './Text';

function trimStart(text: Text): Text {
  return Text(text._value.trimStart());
}

export default trimStart;
