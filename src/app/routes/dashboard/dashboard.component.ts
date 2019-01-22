import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
  }

  /**
   * 
   */
  preview() {
    window.open("http://localhost:4200/assets/pdf/web/viewer.html");
  }

}
