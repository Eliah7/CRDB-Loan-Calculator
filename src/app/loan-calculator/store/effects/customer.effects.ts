import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromEnums from '../enums';
import * as fromActions from '../actions';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoanCalculatorService } from '../../services/loan-calculator.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomerState } from '../state';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private loanCalculatorService: LoanCalculatorService,
    private store: Store<CustomerState>
  ) {}

  calculateLoanDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEnums.CustomerActionsEnums.REQUEST_LOAN_DETAILS),
      //   tap((action) => console.log(action)),
      tap(() => this.store.dispatch(fromActions.removeAllCustomers())),
      switchMap((action) =>
        this.loanCalculatorService
          .caluculatorLoanDetailsFromCustomerInfo(action['customer'])
          .pipe(
            map(
              (loan) => {
                if (loan.loanAmount > 0) {
                  return fromActions.loanDetailSuccess({
                    customer: action['customer'],
                    loan,
                  });
                } else {
                  return fromActions.noLoanAvailable();
                }
              },
              catchError((error) =>
                of(fromActions.requestLoanDetailsFail({ error }))
              )
            )
          )
      )
    )
  );
}
