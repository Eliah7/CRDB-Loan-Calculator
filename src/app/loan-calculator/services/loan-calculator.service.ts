import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as models from '../models';
import * as helpers from '../helpers';
// import { pv } from '../helpers';
import { PV } from '@formulajs/formulajs';

@Injectable({
  providedIn: 'root',
})
export class LoanCalculatorService {
  caluculatorLoanDetailsFromCustomerInfo(
    customer: models.Customer
  ): Observable<models.Loan> {
    if (customer) {
      let totalDeductionsWithCRDBDeduction =
        customer.grossSalary - customer.netSalary;
      let totalDeductionsWithoutCRDBDeduction =
        totalDeductionsWithCRDBDeduction - customer.crdbInstallment;
      let maximumCreditRatio = 0.666 * customer.grossSalary;
      let deductableAmount =
        maximumCreditRatio - totalDeductionsWithoutCRDBDeduction;

      let loanAmount = PV(
        0.16 / 12,
        customer.durationInMonths,
        -deductableAmount
      ); // write function to calculate the loan

      let loan: models.Loan = {
        interest: 16,
        tenureInMonths: 0,
        durationInMonths: customer.durationInMonths,
        installmentPerMonth: loanAmount / customer.durationInMonths,
        loanAmount: loanAmount,
      };

      return of(loan);
    }
  }
}
