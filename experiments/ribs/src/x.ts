import type Model from './Model';

type EventMap = {
  [name: string]: Event;
};

class ModelEvent<M extends Model<any>> extends Event {
  override target: M;

  constructor(event: string, model: M) {
    super(event, {
      bubbles: true,
      cancelable: true,
    });

    this.target = model;
  }
}

class EventEmitter<E> {
  private _event = new EventTarget();

  on<E>(event: E) {

  }
}
