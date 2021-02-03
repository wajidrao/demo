import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yeah i have changed from app.components.ts file and then exported to html page';
  name="wajid";

  getName()
  {
    return " wajid rao";
  }
  getName2()
  {
    return this.name;
  }
  obj={
    name: "k20pro" ,
    varient : "6gb",
    old: 1, price:455.5, 
  }
  object2 ={
    name:"poco f1",old:5,varient:'4gb',
      }

  object3={
        name: 'note 4', old: 2, varient: '4gb',
      }
  object4={
        name:'note 8' ,old: 1, varient:'4gb only',
      }
  object5={
    name:'hp laptop', old: 4, varient: '8gb',
  }
  object6={
    name:'dell laptop', old:1, varient:'12gb',
  }
  object7={
    name:'mi LED TV' , old:3, varient:'1gb',
  }
  arr=['wajid',1,'saharanpur']
  arr2=['salman',2,'manakmau']
  arr3=['deepal',3,'dhobhi ghat']
  a=10;
  b=20;
  siteUrl=window.location.href


}
