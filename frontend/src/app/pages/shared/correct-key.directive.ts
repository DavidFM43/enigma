import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correctKey(allowedLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const keys: number[] = control.value.split(',');
    verifyStructure();
    const numRep: number = isNaN(control.value) ? -1 : parseInt(control.value);
    return numRep < 0 || numRep >= 26 ? {incorrectKey: {value: control.value}} : null;
  }
}

function verifyStructure(){

}