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
  shiftEncrypt(key: number, plainText: string){
    return this.http.get(this.baseUrl + `/shift/encrypt?key=${key}&plainText=${plainText}`)
    .pipe(catchError(this.handleError));
  }
  shiftDecrypt(key: number, plainText: string){
    return this.http.get(this.baseUrl + `/shift/decrypt?key=${key}&plainText=${plainText}`)
    .pipe(catchError(this.handleError));
  }
  affineEncrypt(keys: number[], plainText: string){
    return this.http.post(this.baseUrl + '/affine/encrypt', { keys: keys, plainText : plainText})
    .pipe( catchError(this.handleError));
  }
  affineDecrypt(keys: number[], plainText: string){
    return this.http.post(this.baseUrl + '/affine/decrypt', { keys: keys, plainText : plainText})
    .pipe( catchError(this.handleError));
  }
  substitutionEncrypt(keys: number[], plainText: string){
    return this.http.post(this.baseUrl + '/substitution/encrypt', { keys: keys, plainText : plainText})
    .pipe( catchError(this.handleError));
  }
  substitutionDecrypt(keys: number[], plainText: string){
    return this.http.post(this.baseUrl + '/substitution/decrypt', { keys: keys, plainText : plainText})
    .pipe( catchError(this.handleError));
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
