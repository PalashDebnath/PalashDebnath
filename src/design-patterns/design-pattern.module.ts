import { NgModule } from '@angular/core';

import { DesignPatternService } from './services/design-pattern-service';

import { BuilderComponent } from './builder/builder.component';
import { DesignPatternComponent } from './design-pattern.component';

import { DesignPatternRoutingModule } from './design-pattern-routing.module';

@NgModule({
  declarations: [
    BuilderComponent,
    DesignPatternComponent
  ],
  imports: [
    DesignPatternRoutingModule
  ],
  providers: [
    DesignPatternService
  ]
})
export class DesignPatternModule { }
