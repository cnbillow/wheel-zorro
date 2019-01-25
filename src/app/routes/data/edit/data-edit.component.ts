import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styles: [`
  [nz-form] {
    max-width: 600px;
  }
  nz-date-picker ::ng-deep .ant-calendar-picker{
    width: 100%;
  }
`]
})
export class DataEditComponent implements OnInit {

  @Input("id") id: string;//单据ID

  constructor() { }

  ngOnInit() {
  }

}
