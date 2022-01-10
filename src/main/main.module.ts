import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainRoutingModule } from './main-routing.module';
import { MainMaterialModule } from './main-material.module';
import { AlgorithmModule } from 'src/algorithms/algorithm.module';
import { DesignPatternModule } from 'src/design-patterns/design-pattern.module';

import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AlgorithmModule,
    MainRoutingModule,
    MainMaterialModule,
    DesignPatternModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
