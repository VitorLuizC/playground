import Text from '../text/Text';

type TextReplacerFunction = (texts: [Text, ...Text[]]) => Text;

class TextReplacer {
  #type: 'text' | 'function';
  #replacer: Text | TextReplacerFunction;

  constructor() {

  }

  get replacer(): (...text: string[]) => string {
    if (this.#type === 'text')
      return () => (this.#replacer as Text)._value;
    return (...texts) => {
      const 
      if (this.#replacer as TextReplacerFunction)
        texts.map(Text);
    };
  }
}

type TextReplacerInString = {
  readonly type: 'text';
  readonly replacer: Text;
};

type TextReplacerInFunction = {
  readonly type: 'function';
  readonly replacer: (texts: [Text, ...Text[]]) => Text;
};

type TextReplacer =
  | TextReplacerInString
  | TextReplacerInFunction;

export function fromText(replacer: Text): TextReplacer {
  return Object.freeze({
    type: 'text',
    replacer: replacer,
  });
}

export function fromFunction(replacer: ): TextReplacer {
  return Object.freeze({
    type: 'function',
    replacer: replacer,
  });
}
