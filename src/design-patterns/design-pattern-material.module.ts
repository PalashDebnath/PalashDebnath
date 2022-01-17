import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class DesignPatternMaterialModule {

}