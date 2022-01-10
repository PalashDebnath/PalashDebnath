import { MatDrawer } from '@angular/material/sidenav';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import { AlgorithmService } from 'src/algorithms/services/algorithm-service';
import { DesignPatternService } from 'src/design-patterns/services/design-pattern-service';

@Component({
  selector: 'profile-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  topic: string = '';
  @Input('drawer')
  drawer: MatDrawer | undefined;
  items: { name: string, url: string }[] = [];
  private listenerAdded: boolean = false;
  private clickHandler: Function | undefined;

  constructor(
    private component: ElementRef,
    private algorithm: AlgorithmService,
    private designPattern: DesignPatternService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.designPattern.onSelected.subscribe((topic: string) => {
      this.topic = topic;
      this.items = this.designPattern.fetchItems();
    });

    this.algorithm.onSelected.subscribe((topic: string) => {
      this.topic = topic;
      this.items = this.algorithm.fetchItems();
    });

    this.clickHandler = (() => { this.drawer?.toggle() }).bind(this);
  };

  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
      .subscribe((breakPointState: BreakpointState) => {
        if (!breakPointState.matches) {
          this.component
            .nativeElement
            .querySelector('.item-list')
            .removeEventListener('click', this.clickHandler);
        }
        else if (!this.listenerAdded) {
          this.component
            .nativeElement
            .querySelector('.item-list')
            .addEventListener('click', this.clickHandler);
          this.listenerAdded = true;
        }
      });
  }
}
