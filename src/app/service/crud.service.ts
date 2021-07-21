import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  API_URL: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  AddTodo(data: Todo): Observable<any> {
    return this.httpClient.post( `${this.API_URL}/add-todo`, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  GetTodos() {
    return this.httpClient.get(`${this.API_URL}`);
  }

    // Get all objects
    GetTodosNotStarted() {
      return this.httpClient.get(`${this.API_URL}/not-started`);
    }

      // Get all objects
  GetTodosInProgress() {
    return this.httpClient.get(`${this.API_URL}/in-progress`);
  }

    // Get all objects
    GetTodosCompleted() {
      return this.httpClient.get(`${this.API_URL}/completed`);
    }

  // Get single object
  GetTodo(id:any): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/todo/${id}`, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Update
  updateTodo(id:any, data:any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/update-todo/${id}`, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteTodo(id:any): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/delete-todo/${id}`, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }


  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
