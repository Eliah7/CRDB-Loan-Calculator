import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as states from '../state';
import { customerReducer } from './customer.reducer';

export interface LoanCalculatorState {
  customers: states.CustomerState;
}

export const reducers: ActionReducerMap<LoanCalculatorState> = {
  customers: customerReducer,
};

export const getLoanCalculatorState =
  createFeatureSelector<states.CustomerState>('customers');

export * from './customer.reducer';
