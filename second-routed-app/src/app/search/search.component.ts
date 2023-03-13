import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
query!:string;
ObsFood!:Observable<object>; 
result!:any;

constructor(public foods :FoodService){

}
submit(query:HTMLInputElement):void{
  if (!query.value) {
    return;
  }
  this.query=query.value;
  this.ObsFood =this.foods.SearchFood(this.query);
  this.ObsFood.subscribe((data) => {this.result=data;console.log(this.result)});
  
  
}
}
