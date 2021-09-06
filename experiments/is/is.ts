import append from './append';
import Predicate from './Predicate';

const SEQUENCE_OF_WHITE_SPACES = /\s+/;

function is(keywords: TemplateStringsArray, ...interpolations: unknown[]): Predicate {
  const tokens = keywords.flatMap((keyword, index) => (
    // The 'index' is lower the array's length when there's an element at its position.
    index < interpolations.length
      ? append(keyword.split(SEQUENCE_OF_WHITE_SPACES), interpolations[index])
      : keyword.split(SEQUENCE_OF_WHITE_SPACES)
  ));

  return (value: unknown) => !!value;
}

export default is;
