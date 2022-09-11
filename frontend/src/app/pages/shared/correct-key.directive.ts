import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correctKey(allowedLengths: number[], min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {  
    const valueInpt: string =  control.value;
    return  !verifyStructure(valueInpt.split(','), min, max, allowedLengths) ? {incorrectKey: {value: valueInpt}} : null;
  }
}

function verifyStructure(arrInpt:string[], min: number, max: number, allowedLengths: number[]): boolean{
  if(!allowedLengths.includes(arrInpt.length)){
    return false;
  }
  for (let i = 0; i < arrInpt.length; i++) {
    if(!isInt(arrInpt[i])){
      return false;
    }
    const elm = parseInt(arrInpt[i]);
    if(elm < min || elm > max){
      return false
    }
  }
  return true;
}
function isInt(inpt: string): boolean{
  let regexp:RegExp = new RegExp(/^[0-9]\d*$/);
  return  regexp.test(inpt);
}

export function correctFistKeyAffine(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fistKey: number[] = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    const fistKeyInpt: string =  control.value.split(',')[0];
    return  !isInt(fistKeyInpt) || !fistKey.includes(parseInt(fistKeyInpt)) ?
             {incorrectKey: {value: fistKeyInpt}} : null;
  }
}
export function isPermutation(Zn: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let setNum: Set<string> = new Set<string>();
    control.value.split(',').forEach(element => {
      setNum.add(element);
    });
    return setNum.size != Zn || !setNum.has(Zn.toString())? {incorrectKey: {value: control.value}} : null;
  }
}