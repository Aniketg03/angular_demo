import { Component } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  fontColor = 'green';
  sayHelloId = 2;
  canClick = false;
  message = 'Good Evening';
 
  sayMessage() {
    alert(this.message);
  }
}

