import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
              <h2>
              Welcome {{name}}
              </h2>
              <h2 class="text-success">Simple class integration</h2>
              <h2 [class]="sussessClass">Class binding as property</h2>
              <h2 class="text-special" [class]="sussessClass">Prioritizing class binding over simple class declaration</h2>
              <h2 [class.text-danger]="hasError">Binding single conditional class</h2>
              <h2 [ngClass]="messageClasses">Binding Multiple Classes</h2>
              <h2 [style.color]="'orange'">Binding styles</h2>
              <h2 [style.color]="hasError ? 'red' : 'green'">Binding conditional styles</h2>
              <h2 [style.color]="highlightColor">Binding styles 2</h2>
              <h2 [ngStyle]="titleStyle">Binding Style Objects with multiple styles</h2>
            `,
  styles: [`
          .text-success {
            color: green;
          }
          .text-danger {
            color: red;
          }
          .text-special {
            font-style: italic;
          }
  `]
})
export class TestComponent implements OnInit {

    public name = "Dibyendu";
    public sussessClass = "text-success";
    public hasError = true;
    public isSpecial = true;
    public highlightColor = "orange";
    public messageClasses ={
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
    }
    public titleStyle = {
      color: "blue",
      fontStyle: "italic"
    }

    constructor() { }

    ngOnInit()
    {}

}
