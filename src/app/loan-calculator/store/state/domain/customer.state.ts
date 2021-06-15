import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as models from '../../../models';

export interface CustomerState extends EntityState<models.Customer> {
  loading: boolean;
  loaded: boolean;
  requestIsValid: boolean;
}

export const customerAdapter: EntityAdapter<models.Customer> =
  createEntityAdapter<models.Customer>();

export const initialCustomerState: CustomerState =
  customerAdapter.getInitialState({
    loading: false,
    loaded: false,
    requestIsValid: false,
  });
