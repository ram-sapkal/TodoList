import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(){
    // setTimeout(() => {
    //   this.title="title is chaned to to-do-list Application"
    // }, 3000);
  }
}
