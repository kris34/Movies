import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchingPass(control1: string, control2: string): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(control1);
    const repass = group.get(control2);

    return pass?.value == repass?.value ? null : { matchingPass: true };
  };
}
