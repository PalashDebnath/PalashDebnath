import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'profile-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, AfterViewInit {
  @Input('lines')
  lines: string[] = [];
  @ViewChild('ol')
  ol: ElementRef | undefined;

  private indent: number = 4;
  private counter: number = 0;
  private prepandCharacter: string = ' ';

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    let prepandString;
    for (let index = 0; index < this.lines.length; index++) {
      const child = this.renderer.createElement('li');
      if (this.lines[index].trim() === '}') {
        this.counter -= 1;
      }
      prepandString = this.prepandCharacter.repeat(this.counter * this.indent);
      child.innerText = prepandString + this.lines[index].trim();
      if (this.lines[index].trim().substring(0, 2) === '//') {
        this.renderer.addClass(child, 'comment');
      }
      this.renderer.appendChild(this.ol?.nativeElement, child);
      if (this.lines[index].trim() === '{') {
        this.counter += 1;
      }
    }
  }

  ngOnInit(): void { }
}
