import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-close',
  template: `
    <div class="row">
      <div class="col-12 position-relative">
        <h2>{{ titleDital }}</h2>
        <a [routerLink]="['/recipes']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#dc3545"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            style="
              position: absolute;
              right: 15px;
              top: 50%;
              transform: translateY(-50%);
              cursor: pointer;
            "
          >
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class CloseComponent implements OnInit {
  titleDital = 'Recipe Detail';

  constructor() {}

  ngOnInit() {}
}
