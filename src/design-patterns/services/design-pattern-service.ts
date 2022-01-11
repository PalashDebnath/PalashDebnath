import { EventEmitter } from '@angular/core';

export type Item = {
  name: string,
  url: string
}

export class DesignPatternService {
  private items: Item[] = [
    { name: 'Single Responsibility Principle', url: '/design-patterns/single-responsibility-principle' },
    { name: 'Open Close Principle', url: '/design-patterns/open-close-principle' },
    { name: 'Liskov Substitution Principle', url: '/design-patterns/liskov-substitution-principle' },
    { name: 'Interface Segregation Principle', url: '/design-patterns/interface-segregation-principle' },
    { name: 'Dependency Inversion Principle', url: '/design-patterns/dependency-inversion-priciple' },
    { name: 'Builder Pattern', url: '/design-patterns/builder' },
    { name: 'Factory Method Pattern', url: '/design-patterns/factory-method' },
    { name: 'Abstract Factory Pattern', url: '/design-patterns/abstract-factory' },
    { name: 'Prototype Pattern', url: '/design-patterns/prototype' },
    { name: 'Singleton Pattern', url: '/design-patterns/singleton' },
    { name: 'Adapter Pattern', url: '/design-patterns/adapter' },
    { name: 'Bridge Pattern', url: '/design-patterns/bridge' },
    { name: 'Composite Pattern', url: '/design-patterns/composite' },
    { name: 'Decorator Pattern', url: '/design-patterns/decorator' },
    { name: 'Facade Pattern', url: '/design-patterns/facade' },
    { name: 'Flyweight Pattern', url: '/design-patterns/flyweight' },
    { name: 'Proxy Pattern', url: '/design-patterns/proxy' },
    { name: 'Chain Of Responsibility Pattern', url: '/design-patterns/chain-of-responsibility' },
    { name: 'Command Pattern', url: '/design-patterns/command' },
    { name: 'Interpretor Pattern', url: '/design-patterns/interpretor' },
    { name: 'Iterator Pattern', url: '/design-patterns/iterator' },
    { name: 'Mediator Pattern', url: '/design-patterns/mediator' },
    { name: 'Memento Pattern', url: '/design-patterns/memento' },
    { name: 'Null object Pattern', url: '/design-patterns/null-object' },
    { name: 'Observer Pattern', url: '/design-patterns/observer' },
    { name: 'State Pattern', url: '/design-patterns/state' },
    { name: 'Strategy Pattern', url: '/design-patterns/strategy' },
    { name: 'Template Method Pattern', url: '/design-patterns/template-method' },
    { name: 'Visitor Pattern', url: '/design-patterns/visitor' }
  ];

  onSelected = new EventEmitter<string>();

  fetchItems(): Item[] {
    return this.items.slice();
  }

  fetchSiblingsByUrl(url: string): Item[] {
    let items: Item[] = [];
    const index = this.items.findIndex((item) => item.url === url);
    if (index === -1) {
      items.push(this.items.slice(0)[0]);
    }
    else if (index === 0) {
      items.push({ name: 'Design Patterns Overview', url: '/design-patterns' });
      items.push(this.items.slice(index + 1)[0]);
    }
    else if (index === this.items.length - 1) {
      items.push(this.items.slice(index - 1)[0]);
    }
    else {
      items.push(this.items.slice(index - 1)[0]);
      items.push(this.items.slice(index + 1)[0]);
    }
    return items;
  }
}