import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correctKey(allowedLength: number, min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {   
    return  verifyStructure(control.value.split(','), min, max) ? {incorrectKey: {value: control.value}} : null;
  }
}

function verifyStructure(arrInpt:string, min: number, max: number): boolean{
  if(arrInpt.length == 0){
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