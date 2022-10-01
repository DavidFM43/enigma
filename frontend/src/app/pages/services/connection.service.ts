import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  public type: string;
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.type = null;
    this.baseUrl = "http://127.0.0.1:5000/";
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError("Error! something went wrong. >:v");
  }

  //shift
  shiftEncrypt(key: number, plainText: string) {
    return this.http
      .get(this.baseUrl + `/shift/encrypt?key=${key}&plainText=${plainText}`)
      .pipe(catchError(this.handleError));
  }
  shiftDecrypt(key: number, cipherText: string) {
    return this.http
      .get(this.baseUrl + `/shift/decrypt?key=${key}&cipherText=${cipherText}`)
      .pipe(catchError(this.handleError));
  }
  shiftAttack(cipherText: string) {
    return this.http
      .get(this.baseUrl + `/shift/attack?cipherText=${cipherText}`)
      .pipe(catchError(this.handleError));
  }

  //affine
  affineEncrypt(keys: number[], plainText: string) {
    return this.http
      .post(this.baseUrl + "/affine/encrypt", {
        key: keys,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  affineDecrypt(keys: number[], cipherText: string) {
    return this.http
      .post(this.baseUrl + "/affine/decrypt", {
        key: keys,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  affineAttack(cipherText: string) {
    return this.http
      .post(this.baseUrl + "/affine/attack", { cipherText: cipherText })
      .pipe(catchError(this.handleError));
  }

  //substitution
  substitutionEncrypt(key: string, plainText: string) {
    return this.http
      .post(this.baseUrl + "/substitution/encrypt", {
        key: key,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  substitutionDecrypt(key: string, cipherText: string) {
    return this.http
      .post(this.baseUrl + "/substitution/decrypt", {
        key: key,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  substitutionAttack(cipherText: string) {
    return this.http
      .post(this.baseUrl + "/substitution/attack", { cipherText: cipherText })
      .pipe(catchError(this.handleError));
  }
  
  //vigenere
  vigenereEncrypt(key: string, plainText: string) {
    return this.http
      .post(this.baseUrl + "/vigenere/encrypt", {
        key: key,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  vigenereDecrypt(key: string, cipherText: string) {
    return this.http
      .post(this.baseUrl + "/vigenere/decrypt", {
        key: key,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  vigenereKeyAttack(keySize: number, cipherText: string) {
    return this.http
      .post(this.baseUrl + "/vigenere/attack/key", {
        keySize: keySize,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  vigenereNoKeyAttack(cipherText: string) {
    return this.http
      .post(this.baseUrl + "/vigenere/attack/nokey", { cipherText: cipherText })
      .pipe(catchError(this.handleError));
  }

  // permutation
  permutationEncrypt(key: number[], plainText: string) {
    return this.http
      .post(this.baseUrl + "/permutation/encrypt", {
        key: key,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  permutationDecrypt(key: number[], cipherText: string) {
    return this.http
      .post(this.baseUrl + "/permutation/decrypt", {
        key: key,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }

  // hill
  hillEncrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/hill/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  hillDecrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/hill/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  hillAttack(cipherText: string, plainText: string, matrixSize: number) {
    return this.http
      .post(this.baseUrl + "/hill/attack", {
        matrixSize: matrixSize,
        plainText: plainText,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
}
