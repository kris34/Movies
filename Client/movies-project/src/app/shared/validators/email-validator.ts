import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(): ValidatorFn {
  const re = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  return (control) => {
    return control.value == '' || re.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
