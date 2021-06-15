import { createReducer, on } from '@ngrx/store';

import * as states from '../state';
import * as actions from '../actions';
import { customerAdapter } from '../state';

export const customerReducer = createReducer(
  states.initialCustomerState,
  on(
    actions.REQUEST_LOAN_DETAILS,
    (state: states.CustomerState, { customer }) => {
      return customerAdapter.addOne(customer, { ...state, loading: true });
    }
  ),
  on(
    actions.loanDetailSuccess,
    (state: states.CustomerState, { customer, loan }) => {
      let updatedCustomer = { ...customer, loan };
      // console.log(updatedCustomer);
      return customerAdapter.upsertOne(updatedCustomer, {
        ...state,
        loading: false,
        requestIsValid: true,
      });
    }
  ),
  on(actions.removeAllCustomers, (state: states.CustomerState) => {
    return customerAdapter.removeAll({ ...state, loading: true });
  }),
  on(actions.noLoanAvailable, (state: states.CustomerState) => {
    return { ...state, requestIsValid: false };
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  customerAdapter.getSelectors();

export const getAllCustomersIds = selectIds;
export const getAllCustomersEntitiesFromAdapter = selectEntities;
export const getAllCustomersFromAdapter = selectAll;
export const getTotalNumberOfCustomers = selectTotal;
