import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

    UrlApi = "http://localhost:3000/students";
  
  constructor(private http: HttpClient) { }

  // CRUD
  // Methode GET
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.UrlApi);
  }
  // Methode Delete 
  delete(id:any){
    return this.http.delete<Person[]>(`${this.UrlApi}/${id}`);
  }

  // Methode Post
   
  postPerson(Person:any){
    return this.http.post<Person[]>(this.UrlApi,Person);
  }

  // Methode Update

  updatePerson(Person: any){
    return this.http.put(`${this.UrlApi}/${Person.id}`, Person);
  }
   
}
