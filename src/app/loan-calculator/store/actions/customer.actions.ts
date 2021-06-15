import { createAction, props } from '@ngrx/store';
import { Customer, Loan } from '../../models';

import * as enums from '../enums';

export const REQUEST_LOAN_DETAILS = createAction(
  enums.CustomerActionsEnums.REQUEST_LOAN_DETAILS,
  props<{ customer?: Customer }>()
);

export const loanDetailSuccess = createAction(
  enums.CustomerActionsEnums.LOAN_DETAILS_SUCCESS,
  props<{ customer: Customer; loan: Loan }>()
);

export const noLoanAvailable = createAction(
  enums.CustomerActionsEnums.NO_LOAN_AVAILABLE
);

export const removeAllCustomers = createAction(
  enums.CustomerActionsEnums.REMOVE_ALL_CUSTOMERS
);

export const requestLoanDetailsFail = createAction(
  enums.CustomerActionsEnums.REMOVE_ALL_CUSTOMERS,
  props<{ error: any }>()
);
