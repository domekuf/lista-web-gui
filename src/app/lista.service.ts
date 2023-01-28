import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ListaService {
  readonly url = 'https://5settembre.it/api/';

  constructor(
    private http: HttpClient
  ) { }

  public get(id: string): Observable<Person[]> {
    return this.http.get(`${this.url}${id}`) as Observable<Person[]>;
  }

  public put(id:string, person: Person) {
    this.http.put(`${this.url}${id}`, person).subscribe((a) => console.log(a));
  }
}

export interface Person {
  id: string,
  name: string,
  checked: boolean,
  range: string
}
