import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filters';

  position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'blue',
    text: 'Aqui es un punto OP'
  };
}
