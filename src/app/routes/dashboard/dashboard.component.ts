import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

declare var jsPath;

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
}
