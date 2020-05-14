import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(' '))
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (control.value === 'Kaveh') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
