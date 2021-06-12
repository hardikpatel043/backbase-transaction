import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class CustomvalidationService {
  constructor(private accountService: AccountService) {}

  AmountValidator(amountControl: AbstractControl) {
    return new Promise((resolve) => {
      if (this.validateAmount(amountControl.value)) {
        resolve(null);
      } else {
        resolve({ amountNotAllowed: true });
      }
    });
  }

  validateAmount(amount: number) {
    return amount <= 0 || this.accountService.totalBalance - amount < 500
      ? false
      : true;
  }
}
