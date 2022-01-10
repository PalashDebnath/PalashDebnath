import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MainMaterialModule { }