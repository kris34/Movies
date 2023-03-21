import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const password = control.parent?.get('password')?.value;
  const rePassword = control.value;
  return password == rePassword ? null : { invalidPasswords: true };
}
