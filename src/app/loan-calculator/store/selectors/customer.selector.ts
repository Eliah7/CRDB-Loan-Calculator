import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { customerAdapter } from '../state';
import * as fromCustomers from '../reducers/customer.reducer';
import * as fromState from '../state';

// export const getCustomersState = createSelector(
//   fromFeature.getLoanCalculatorState
// );

export const getCustomersLoading = createSelector(
  fromFeature.getLoanCalculatorState,
  (state) => state.loading
);

export const getCustomersLoaded = createSelector(
  fromFeature.getLoanCalculatorState,
  (state) => state.loaded
);

export const getCustomersRequestIsValid = createSelector(
  fromFeature.getLoanCalculatorState,
  (state) => state.requestIsValid
);

export const getCustomer = createSelector(
  fromFeature.getLoanCalculatorState,
  fromCustomers.getAllCustomersEntitiesFromAdapter,
  (entities) => entities[0]
);

export const getCustomerLoan = createSelector(
  fromFeature.getLoanCalculatorState,
  (customer) => customer.entities
);

export const getTheme = createSelector(
  fromFeature.getLoanCalculatorState,
  (customer) => customer.theme
);
