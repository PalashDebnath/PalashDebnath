import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';

import { Item, DesignPatternService } from './services/design-pattern-service';

@Component({
  selector: 'profile-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.scss']
})
export class DesignPatternComponent implements OnInit, DoCheck {
  nextItem: Item | undefined;
  showOverview: boolean = false;
  previousItem: Item | undefined;
  private previousUrl: string | undefined;

  constructor(private router: Router, private service: DesignPatternService) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.previousUrl !== this.router.url) {
      this.previousUrl = this.router.url;
      const items = this.service.fetchSiblingsByUrl(this.router.url);
      if (this.router.url === '/design-patterns') {
        this.showOverview = true;
        this.previousItem = undefined;
        this.nextItem = items[0];
      }
      else {
        this.showOverview = false;
        this.previousItem = items[0];
        this.nextItem = items.length === 1 ? undefined : items[1];
      }
    }
  }
}
