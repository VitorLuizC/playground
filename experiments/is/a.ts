enum StyleTokenName {
  COLOR = 'COLOR',
}

type Color = 'red' | 'green' | 'blue';

interface StyleVariable {
  [StyleTokenName.COLOR]: Color;
}
