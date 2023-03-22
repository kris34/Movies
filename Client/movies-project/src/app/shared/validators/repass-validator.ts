import { AbstractControl } from '@angular/forms';

export function repassValidator(passwordControl: AbstractControl) {
  return (repass: AbstractControl) => {
    if (repass.value != passwordControl.value) {
      return {
        passwordMatch: true,
      };
    }
    return null;
  };
}
