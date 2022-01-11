import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignPatternRoutingModule } from './design-pattern-routing.module';
import { DesignPatternMaterialModule } from './design-pattern-material.module';

import { DesignPatternService } from './services/design-pattern-service';

import { ProxyComponent } from './proxy/proxy.component';
import { StateComponent } from './state/state.component';
import { BridgeComponent } from './bridge/bridge.component';
import { FacadeComponent } from './facade/facade.component';
import { AdapterComponent } from './adapter/adapter.component';
import { VisitorComponent } from './visitor/visitor.component';
import { CommandComponent } from './command/command.component';
import { MementoComponent } from './memento/memento.component';
import { BuilderComponent } from './builder/builder.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ObserverComponent } from './observer/observer.component';
import { IteratorComponent } from './iterator/iterator.component';
import { MediatorComponent } from './mediator/mediator.component';
import { DesignPatternComponent } from './design-pattern.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FlyweightComponent } from './flyweight/flyweight.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { NullObjectComponent } from './null-object/null-object.component';
import { InterpretorComponent } from './interpretor/interpretor.component';
import { TemplateMethodComponent } from './template-method/template-method.component';
import { LiskovSubstitutionComponent } from './liskov-substitution/liskov-substitution.component';
import { DependencyInversionComponent } from './dependency-inversion/dependency-inversion.component';
import { InterfaceSegregationComponent } from './interface-segregation/interface-segregation.component';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';

@NgModule({
  declarations: [
    BuilderComponent,
    DesignPatternComponent,
    LiskovSubstitutionComponent,
    SingleResponsibilityComponent,
    OpenCloseComponent,
    InterfaceSegregationComponent,
    DependencyInversionComponent,
    AdapterComponent,
    BridgeComponent,
    CompositeComponent,
    DecoratorComponent,
    FacadeComponent,
    FlyweightComponent,
    ProxyComponent,
    ChainOfResponsibilityComponent,
    CommandComponent,
    InterpretorComponent,
    IteratorComponent,
    MediatorComponent,
    MementoComponent,
    NullObjectComponent,
    ObserverComponent,
    StateComponent,
    StrategyComponent,
    TemplateMethodComponent,
    VisitorComponent,
  ],
  imports: [
    CommonModule,
    DesignPatternRoutingModule,
    DesignPatternMaterialModule
  ],
  providers: [
    DesignPatternService
  ]
})
export class DesignPatternModule { }
