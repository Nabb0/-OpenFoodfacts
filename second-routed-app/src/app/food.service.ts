import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {  }

  SearchFood(query:string){
    const url =`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`;

    let ObsFood = this.http.get(url);
    return ObsFood;
  }
}
