import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { cipherTextElGamal, ElGamalElipKeys, ElGamalKeys, RSAPrivateKey, RSAPublicKey } from "../Interfaces";

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
  // triple des
  tripleDesEncrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/triple_des/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  tripleDesDecrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/triple_des/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  // aes
  aesEncrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/aes/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  aesDecrypt(value: any) {
    return this.http
      .post(this.baseUrl + "/aes/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob",
      })
      .pipe(catchError(this.handleError));
  }
  // simplified des
  simplifiedDesEncrypt(key: string, plainText: string) {
    return this.http
      .post(this.baseUrl + "/simplified_des/encrypt", {
        key: key,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  simplifiedDesDecrypt(key: string, cipherText: string) {
    return this.http
      .post(this.baseUrl + "/simplified_des/decrypt", {
        key: key,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  // gamma
  gammaEncrypt(permutation: string, x: number, y: number, plainText: string) {
    return this.http
      .post(this.baseUrl + "/gammap/encrypt", {
        permutation: permutation,
        plainText: plainText,
        x_0: x,
        y_0: y,
      })
      .pipe(catchError(this.handleError));
  }
  gammaDecrypt(
    permutation: string,
    x: number,
    y: number,
    cipherText: number[][]
  ) {
    return this.http
      .post(this.baseUrl + "/gammap/decrypt", {
        permutation: permutation,
        cipherText: cipherText,
        x_0: x,
        y_0: y,
      })
      .pipe(catchError(this.handleError));
  }
  //RSA
  RSAEncrypt(key: RSAPublicKey, plainText: string) {
    return this.http
    .post(this.baseUrl + "/rsa/encrypt", {
      plainText: plainText,
      N: key.N,
      E: key.E
    })
    .pipe(catchError(this.handleError));
  }
  RSADecrypt(key: RSAPrivateKey, cipherText: string) {
    return  this.http
    .post(this.baseUrl + "/rsa/decrypt", {
      cipherText: cipherText,
      N: key.N,
      D: key.D
    })
    .pipe(catchError(this.handleError));
  }
  RSAGetKeys() {
    return this.http
      .get(this.baseUrl + "/rsa/getKeys")
      .pipe(catchError(this.handleError));
  }

  // Rabin
  rabinEncrypt(n: number, plainText: string) {
    return this.http
      .post(this.baseUrl + "/rabin/encrypt", {
        n: n,
        plainText: plainText,
      })
      .pipe(catchError(this.handleError));
  }
  rabinDecrypt(p: number, q: number, cipherText: string) {
    return this.http
      .post(this.baseUrl + "/rabin/decrypt", {
        p: p,
        q: q,
        cipherText: cipherText,
      })
      .pipe(catchError(this.handleError));
  }
  rabinGetKeys() {
    return this.http
      .get(this.baseUrl + "/rabin/getKeys")
      .pipe(catchError(this.handleError));
  }
  RSAGetND(P: number, Q: number, E: number) {
    return this.http
      .get(this.baseUrl + `/rsa/getND?P=${P}&Q=${Q}&E=${E}`)
      .pipe(catchError(this.handleError));
  }
  //ELGamal
  ElGamalEncrypt(key: ElGamalKeys, plainText: string) {
    return this.http
    .post(this.baseUrl + "/elgamal/encrypt", {
      plainText: plainText,
      P: key.P,
      G: key.G,
      H: key.H
    })
    .pipe(catchError(this.handleError));
  }
  ElGamalDecrypt(key: ElGamalKeys, cipherText: number[][]) {
    return  this.http
    .post(this.baseUrl + "/elgamal/decrypt", {
      cipherText: cipherText,
      P: key.P,
      G: key.G,
      X: key.X
    })
    .pipe(catchError(this.handleError));
  }
  ElGamalGetKeys() {
    return this.http
      .get(this.baseUrl + '/elgamal/getKeys')
      .pipe(catchError(this.handleError));
  }
  //ELGamalElip
  ElGamalElipEncrypt(key: ElGamalElipKeys, plainText: string) {
    return this.http
    .post(this.baseUrl + "/gammaleip/encrypt", {
      plainText: plainText,
      Pk: key.Pk
    })
    .pipe(catchError(this.handleError));
  }
  ElGamalElipDecrypt(key: ElGamalElipKeys,  cipherText: cipherTextElGamal) {
    return  this.http
    .post(this.baseUrl + "/gammaleip/decrypt", {
      cipherText: cipherText,
      X: key.X,
      Y: key.Y,
      Pk: key.Pk
    })
    .pipe(catchError(this.handleError));
  }
  ElGamalElipGetKeys() {
    return this.http
      .get(this.baseUrl + '/gammaleip/getKeys')
      .pipe(catchError(this.handleError));
  }
}
