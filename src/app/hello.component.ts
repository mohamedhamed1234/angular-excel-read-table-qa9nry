import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello0',
  template: `<h5>Hello5 {{name}}!</h5>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
