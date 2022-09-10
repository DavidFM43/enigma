import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormalizerService {

  constructor() { }

  setplainText(plainText: string):string{
    return plainText.replace(/ /g,'').toLocaleLowerCase();
  }
}
