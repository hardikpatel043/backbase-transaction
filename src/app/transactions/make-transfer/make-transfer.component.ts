import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { CustomvalidationService } from './../services/custom-validation.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeTransferComponent implements OnInit {
  makeTransferForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.makeTransferForm = this.fb.group({
      fromAccount: ['My Personal Account: ' + this.accountService.totalBalance],
      toAccount: ['', [Validators.required]],
      amount: [
        '',
        [Validators.required],
        this.customValidator.AmountValidator.bind(this.customValidator),
      ],
    });
  }

  get makeTransferFormControl() {
    return this.makeTransferForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.makeTransferForm.valid) {
      alert('transaction succesfull');
    }
  }
}
