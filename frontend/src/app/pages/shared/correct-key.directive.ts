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
  return !isNaN(Number(inpt)) && parseInt(inpt) == Number(inpt);
}