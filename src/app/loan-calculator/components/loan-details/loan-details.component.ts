import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Customer, Loan } from '../../models';
import * as fromStore from '../../store';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate(
      '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(-200px)', opacity: 0 })
    ),
  ]),
]);

@Component({
  selector: 'app-loan-details',
  animations: [DROP_ANIMATION],
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css'],
})
export class LoanDetailsComponent implements OnInit {
  durations = [12, 24, 36, 48, 60, 72, 84];
  customer$: Observable<Customer>;
  customerDefault: Customer;
  monthsValue = 12;
  loanAmountValue = 0;

  constructor(private store: Store<fromStore.CustomerState>) {}

  ngOnInit(): void {
    this.customer$ = this.store
      .select(fromStore.getCustomerLoan)
      .pipe(switchMap((val) => of(Object.values(val)[0])));

    this.customer$.subscribe((customer) => {
      // console.log(customer.loan.loanAmount);
      this.customerDefault = customer;
      this.monthsValue = customer.loan.durationInMonths;
      this.loanAmountValue = customer.loan.loanAmount;
    });
    // .pipe(tap((customer) => console.log(customer)));
  }

  onLoanInputChange(event: MatSliderChange) {
    this.loanAmountValue = event.value;
  }

  onDurationInputChange(event: MatSliderChange) {
    console.log(this.customerDefault);
    let durationInMonths = event.value;
    let customerWithUpdatedDuration = {
      ...this.customerDefault,
      durationInMonths,
    };
    this.store.dispatch(
      fromStore.REQUEST_LOAN_DETAILS({ customer: customerWithUpdatedDuration })
    );
  }
}
