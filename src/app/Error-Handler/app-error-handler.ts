import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('an Unexpected error has occurred');
    console.log(error);
  }
}
