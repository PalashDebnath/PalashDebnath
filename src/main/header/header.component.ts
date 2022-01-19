import { NavigationEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Component, OnInit, Input } from '@angular/core';

import { DesignPatternService } from 'src/design-patterns/services/design-pattern-service';
import { AlgorithmService } from 'src/algorithms/services/algorithm-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'profile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('drawer')
  drawer: MatDrawer | undefined;

  constructor(
    private title: Title,
    private router: Router,
    private algorithm: AlgorithmService,
    private designPattern: DesignPatternService,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('design-patterns')) {
          this.designPattern.onSelected.next('Design Patterns');
          this.title.setTitle('Design Patterns');
        }
        else if (this.router.url.includes('algorithms')) {
          this.algorithm.onSelected.next('Algorithms');
          this.title.setTitle('Algorithms');
        }
      };
    });
  };

  onClick(): void {
    this.drawer?.toggle();
  };
}
