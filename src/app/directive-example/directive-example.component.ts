import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
 firstName:string="sachin";
 lastName:string="Tendulkar";
 age:number=40;
address:any ={
  city :'mumbai',
  state : 'Maharashtra'

}
}