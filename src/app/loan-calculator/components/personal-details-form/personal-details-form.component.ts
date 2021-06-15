import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { v4 as uuid } from 'uuid';
import { Customer, Loan } from '../../models';
import * as fromStore from '../../store';
import { DROP_ANIMATION } from '../loan-details/loan-details.component';

@Component({
  selector: 'app-personal-details-form',
  animations: [DROP_ANIMATION],
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css'],
})
export class PersonalDetailsFormComponent implements OnInit {
  loanDetailsForm: FormGroup;
  durations = [12, 24, 36, 48, 60, 72, 84];

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<fromStore.LoanCalculatorState>
  ) {}

  ngOnInit(): void {
    this.loanDetailsForm = this.formBuilder.group({
      employer: ['', [Validators.required, Validators.nullValidator]],
      grossSalary: ['', [Validators.required, Validators.nullValidator]],
      netPay: ['', [Validators.required, Validators.nullValidator]],
      crdbInstallments: ['', [Validators.required, Validators.nullValidator]],
      durationInMonths: ['', [Validators.required, Validators.nullValidator]],
    });
    // this.loan$ = this.store
    //   .select(fromStore.getCustomerLoan)
    // .pipe(tap((customer) => console.log(customer)));
  }

  calculateLoanDetails() {
    if (this.loanDetailsForm.valid) {
      let formValue = this.loanDetailsForm.value;
      let customer: Customer = {
        id: uuid(),
        employer: formValue['employer'],
        grossSalary: formValue['grossSalary'],
        netSalary: formValue['netPay'],
        crdbInstallment: formValue['crdbInstallments'],
        durationInMonths: formValue['durationInMonths'],
        loan: null,
      };
      this.store.dispatch(fromStore.REQUEST_LOAN_DETAILS({ customer }));
    }
  }
}
