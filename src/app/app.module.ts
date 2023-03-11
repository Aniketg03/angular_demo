import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { MailComponent } from './mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    DirectiveExampleComponent,
    MailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
