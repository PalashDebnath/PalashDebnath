import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'profile-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened: BooleanInput = true;
  title: string = 'profile';
  drawerMode: MatDrawerMode = 'side';
  @ViewChild('drawer')
  private drawer: MatDrawer | undefined;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 960px)'))
      this.opened = false;
    else
      this.opened = true;
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset]).subscribe((breakPointState: BreakpointState) => {
      if (breakPointState.matches) {
        this.drawerMode = 'over';
        if (this.drawer?.opened) this.drawer?.toggle();
      }
      else {
        this.drawerMode = 'side';
        if (!this.drawer?.opened) this.drawer?.toggle();
      }
    });
  }
}
