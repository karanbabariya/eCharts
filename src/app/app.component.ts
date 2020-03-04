import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metsco';

  routes = [
  	{linkName: 'Graphic 1', url: 'graphic1'},
  	{linkName: 'Graphic 2', url: 'graphic2'}
  ]
}
