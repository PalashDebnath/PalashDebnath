import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmComponent } from './algorithm.component';

import { AlgorithmService } from './services/algorithm-service';



@NgModule({
  declarations: [
    AlgorithmComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AlgorithmService
  ]
})
export class AlgorithmModule { }
