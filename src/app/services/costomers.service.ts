import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Costumers } from '../interfaces/costomers';

@Injectable({
  providedIn: 'root'
})
export class CostomersService {

  api = "http://private-92a969-processoseletivo1.apiary-mock.com/customers";

  constructor(private http: HttpClient) { }

  getCostomers(): Observable<Costumers[]>{
    return this.http.get<Costumers[]>(this.api);
  }

  putCostomer(): Observable<Costumers[]>{
    return this.http.get<Costumers[]>(this.api+"/id:1");
  }


}
