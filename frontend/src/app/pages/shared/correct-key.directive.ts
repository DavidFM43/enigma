import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as math from "mathjs";
import { boolean } from "mathjs";


export function correctKey(
  allowedLengths: number[],
  min: number,
  max: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valueInpt: string = control.value;
    return !verifyStructure(valueInpt.split(","), min, max, allowedLengths)
      ? { incorrectKey: { value: valueInpt } }
      : null;
  };
}

function verifyStructure(
  arrInpt: string[],
  min: number,
  max: number,
  allowedLengths: number[]
): boolean {
  if (!allowedLengths.includes(arrInpt.length)) {
    return false;
  }
  for (let i = 0; i < arrInpt.length; i++) {
    if (!isInt(arrInpt[i])) {
      return false;
    }
    const elm = parseInt(arrInpt[i]);
    if (elm < min || elm > max) {
      return false;
    }
  }
  return true;
}
function isInt(inpt: string): boolean {
  let regexp: RegExp = new RegExp(/^[0-9]\d*$/);
  return regexp.test(inpt);
}

export function correctFistKeyAffine(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fistKey: number[] = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    const fistKeyInpt: string = control.value.split(",")[0];
    return !isInt(fistKeyInpt) || !fistKey.includes(parseInt(fistKeyInpt))
      ? { incorrectKey: { value: fistKeyInpt } }
      : null;
  };
}
export function isPermutationAbc(Zn: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let setNum: Set<string> = new Set<string>();
    control.value.split("").forEach((element) => {
      setNum.add(element);
    });
    return setNum.size != Zn || !setNum.has("Z")
      ? { incorrectKey: { value: control.value } }
      : null;
  };
}

export function isPermutationNum(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let setNum: Set<string> = new Set<string>();
    control.value.split(",").forEach((element) => {
      setNum.add(element);
    });
    console.log(
      setNum.size,
      control.value.split(",").length,
      setNum.has(control.value.split(",").length.toString())
    );
    let flag: boolean = false;
    let i = 1;
    let top = setNum.size + 1;
    if (setNum.has("0")){
      i = 0
      top -= 1;
    }

    for (i; i < top; i++) {
      if (!setNum.has(i.toString())){
        flag = true;
        break;
      }
    }
    return flag
      ? { incorrectKey: { value: control.value } }
      : null;
  };
}
export function correctKeyHill(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let mtx = control.value.split(",").map(Number);
    return !checkDiv(calDet(mtx))
      ? { incorrectKey: { value: control.value } }
      : null;
  };
}
function calDet(mtx: number[]): number {
  let n: number = Math.sqrt(mtx.length);
  if (!isInt(n.toString())) {
    return 0;
  }
  let auxMax: number[][] = new Array(n);

  for (var i = 0; i < n; i++) {
    auxMax[i] = new Array(n);
  }

  if (n != 1) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        auxMax[i][j] = mtx[i * n + j];
      }
    }
  } else {
    return 0;
  }
  console.log(math.det(auxMax));
  return math.det(auxMax);
}
function checkDiv(det: number): boolean {
  return det % 2 == 0 ? false : true;
}
