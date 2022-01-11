import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';

import { BuilderComponent } from './builder/builder.component';
import { DesignPatternComponent } from './design-pattern.component';
import { SingletonComponent } from './singleton/singleton.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { LiskovSubstitutionComponent } from './liskov-substitution/liskov-substitution.component';
import { DependencyInversionComponent } from './dependency-inversion/dependency-inversion.component';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { InterfaceSegregationComponent } from './interface-segregation/interface-segregation.component';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FacadeComponent } from './facade/facade.component';
import { FlyweightComponent } from './flyweight/flyweight.component';
import { ProxyComponent } from './proxy/proxy.component';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';
import { CommandComponent } from './command/command.component';
import { InterpretorComponent } from './interpretor/interpretor.component';
import { IteratorComponent } from './iterator/iterator.component';
import { MediatorComponent } from './mediator/mediator.component';
import { MementoComponent } from './memento/memento.component';
import { NullObjectComponent } from './null-object/null-object.component';
import { ObserverComponent } from './observer/observer.component';
import { StateComponent } from './state/state.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TemplateMethodComponent } from './template-method/template-method.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {
    path: 'design-patterns',
    component: DesignPatternComponent,
    children: [
      { path: 'single-responsibility-principle', component: SingleResponsibilityComponent },
      { path: 'open-close-principle', component: OpenCloseComponent },
      { path: 'liskov-substitution-principle', component: LiskovSubstitutionComponent },
      { path: 'interface-segregation-principle', component: InterfaceSegregationComponent },
      { path: 'dependency-inversion-priciple', component: DependencyInversionComponent },
      { path: 'builder', component: BuilderComponent },
      { path: 'factory-method', component: FactoryMethodComponent },
      { path: 'abstract-factory', component: AbstractFactoryComponent },
      { path: 'prototype', component: PrototypeComponent },
      { path: 'singleton', component: SingletonComponent },
      { path: 'adapter', component: AdapterComponent },
      { path: 'bridge', component: BridgeComponent },
      { path: 'composite', component: CompositeComponent },
      { path: 'decorator', component: DecoratorComponent },
      { path: 'facade', component: FacadeComponent },
      { path: 'flyweight', component: FlyweightComponent },
      { path: 'proxy', component: ProxyComponent },
      { path: 'chain-of-responsibility', component: ChainOfResponsibilityComponent },
      { path: 'command', component: CommandComponent },
      { path: 'interpretor', component: InterpretorComponent },
      { path: 'iterator', component: IteratorComponent },
      { path: 'mediator', component: MediatorComponent },
      { path: 'memento', component: MementoComponent },
      { path: 'null-object', component: NullObjectComponent },
      { path: 'observer', component: ObserverComponent },
      { path: 'state', component: StateComponent },
      { path: 'strategy', component: StrategyComponent },
      { path: 'template-method', component: TemplateMethodComponent },
      { path: 'visitor', component: VisitorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternRoutingModule { }