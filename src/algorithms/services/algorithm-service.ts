import { Subject } from 'rxjs';

type Item = {
  name: string,
  url: string
}

export class AlgorithmService {
  private items: Item[] = [];

  // In place of EventEmitter uses Subject(observable) from rxjs as they are recommended for emitting new values from service.
  // onSelected = new EventEmitter<string>();
  onSelected = new Subject<string>();

  fetchItems(): Item[] {
    return this.items.slice();
  }
}