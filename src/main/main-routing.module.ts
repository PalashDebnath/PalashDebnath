import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AlgorithmComponent } from 'src/algorithms/algorithm.component';

import { DesignPatternRoutingModule } from 'src/design-patterns/design-pattern-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/design-patterns', pathMatch: 'full' },
  { path: 'algorithms', component: AlgorithmComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DesignPatternRoutingModule],
  exports: [RouterModule]
})
export class MainRoutingModule { }