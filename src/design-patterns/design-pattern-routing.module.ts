import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuilderComponent } from './builder/builder.component';
import { DesignPatternComponent } from './design-pattern.component';

const routes: Routes = [
  {
    path: 'design-patterns',
    component: DesignPatternComponent,
    children: [
      { path: 'builder', component: BuilderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternRoutingModule { }