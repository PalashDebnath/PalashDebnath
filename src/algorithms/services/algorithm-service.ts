import { EventEmitter } from '@angular/core';

type Item = {
  name: string,
  url: string
}

export class AlgorithmService {
  private items: Item[] = [];

  onSelected = new EventEmitter<string>();

  fetchItems(): Item[] {
    return this.items.slice();
  }
}