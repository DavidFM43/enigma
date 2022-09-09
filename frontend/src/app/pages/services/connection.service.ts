import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public type: string;
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.type = null;
    this.baseUrl = 'http://127.0.0.1:5000/';
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong. >:v');
  }
  shift(key: number, textToEncrypt: string){
    return this.http.get(this.baseUrl + `shift?key=${key}&textToEncrypt=${textToEncrypt}`)
    .pipe(catchError(this.handleError));
  }
  /*
  seeAll(first: number, last: number){
    return this.http.get(this.baseUrl + `seeAll?first=${first}&last=${last}`)
    .pipe( catchError(this.handleError));
  }

  search(target: string){
    return this.http.get(this.baseUrl + `search?target=${target}`)
    .pipe( catchError(this.handleError));
  }
  delete(targets: string[]){
    return this.http.post(this.baseUrl + 'delete', { targets})
    .pipe( catchError(this.handleError));
  }
  deleteAll(){
    return this.http.delete(this.baseUrl + 'deleteAll')
    .pipe( catchError(this.handleError));
  }
  edit(elm: DataTable){
    return this.http.post(this.baseUrl + 'edit', {elm})
    .pipe( catchError(this.handleError));
  }
  add(elm: DataTable){
    return this.http.post(this.baseUrl + 'add', {elm})
    .pipe( catchError(this.handleError));
  }
  sort(type: string, fist: number, last: number){
    return this.http.get(this.baseUrl + `sort?type=${type}&fisrt=${fist}&last=${last}`)
    .pipe( catchError(this.handleError));
  }
  detecteItem(value: any) {
    return this.http.post('http://localhost/e2/backend/detecte.php', value, {
      reportProgress: true,
      observe: 'events'
    }).pipe( catchError(this.handleError));
  }
  logIn(user: string, pass: string){
    return this.http.get(this.baseUrl + `login?user=${user}&pass=${pass}`)
    .pipe( catchError(this.handleError));
  }*/

}
