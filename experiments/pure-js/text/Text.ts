export const WHITE_SPACE = ' ';

type Text {
  readonly _value: string;
}

function Text(value: string): Text {
  return Object.freeze({ _value: value });
}

export default Text;

// ---
// matchAll
// ---

type TextMatcherInText = {
  readonly _type: 'text';
  readonly _matcher: Text;
};

type TextMatcherInRegExp = {
  readonly _type: 'regexp';
  readonly _matcher: RegExp;
};

type TextMatcher =
  | TextMatcherInText
  | TextMatcherInRegExp;

type TextReplacerInString = {
  readonly _type: 'text';
  readonly _replacer: Text;
};

type TextReplacerInFunction = {
  readonly _type: 'function';
  readonly _replacer: (texts: Text[]) => Text;
};

type TextReplacer =
  | TextReplacerInString
  | TextReplacerInFunction;



function replaceAll(text: Text, matcher: TextMatcher, replacer: TextReplacer) {
  's'.replace('a', (matched) => {

  });
}
