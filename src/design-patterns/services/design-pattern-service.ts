import { EventEmitter } from '@angular/core';

type Item = {
  name: string,
  url: string
}

export class DesignPatternService {
  private items: Item[] = [
    { name: 'Single responsibility', url: '/design-patterns/single-responsibility-principle' },
    { name: 'Open close', url: '/design-patterns/open-close-principle' },
    { name: 'Liskov substitution', url: '/design-patterns/liskov-substitution-principle' },
    { name: 'Interface segregation', url: '/design-patterns/interface-segregation-principle' },
    { name: 'Dependency inversion', url: '/design-patterns/dependency-inversion-priciple' },
    { name: 'Builder', url: '/design-patterns/builder' },
    { name: 'Factory', url: '/design-patterns/factory' },
    { name: 'Prototype', url: '/design-patterns/prototype' },
    { name: 'Singleton', url: '/design-patterns/singleton' },
    { name: 'Adapter', url: '/design-patterns/adapter' },
    { name: 'Bridge', url: '/design-patterns/bridge' },
    { name: 'Composite', url: '/design-patterns/composite' },
    { name: 'Decorator', url: '/design-patterns/decorator' },
    { name: 'Facade', url: '/design-patterns/facade' },
    { name: 'Flyweight', url: '/design-patterns/flyweight' },
    { name: 'Proxy', url: '/design-patterns/proxy' },
    { name: 'Chain of responsibility', url: '/design-patterns/chain-of-responsibility' },
    { name: 'Command', url: '/design-patterns/command' },
    { name: 'Interpretor', url: '/design-patterns/interpretor' },
    { name: 'Iterator', url: '/design-patterns/iterator' },
    { name: 'Mediator', url: '/design-patterns/mediator' },
    { name: 'Memento', url: '/design-patterns/memento' },
    { name: 'Null object', url: '/design-patterns/null-object' },
    { name: 'Observer', url: '/design-patterns/observer' },
    { name: 'State', url: '/design-patterns/state' },
    { name: 'Strategy', url: '/design-patterns/strategy' },
    { name: 'Template method', url: '/design-patterns/template-method' },
    { name: 'Visitor', url: '/design-patterns/visitor' }
  ];

  onSelected = new EventEmitter<string>();

  fetchItems(): Item[] {
    return this.items.slice();
  }
}