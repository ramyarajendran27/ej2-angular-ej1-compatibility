import { Component } from '@angular/core';
import { gridData } from './grid-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  public gridData: Object[] = gridData;
  public title = 'Average Sales Comparison';
  constructor() {
      // code
  }
}
