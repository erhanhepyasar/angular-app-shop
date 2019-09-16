import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Category } from '../Category/category';
import { Observable, throwError  } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  path  = "http://localhost:3000/categories";

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  handleError(err:HttpErrorResponse){
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
      errorMessage = 'An error occurred ' + err.error.message;
    } else {
      errorMessage = 'System error'
    }

    return throwError(errorMessage);
  }

}
