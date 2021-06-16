import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as models from '../../../models';
import * as enums from '../../enums';

export interface CustomerState extends EntityState<models.Customer> {
  loading: boolean;
  loaded: boolean;
  requestIsValid: boolean;
  theme: boolean;
}

export const customerAdapter: EntityAdapter<models.Customer> =
  createEntityAdapter<models.Customer>();

export const initialCustomerState: CustomerState =
  customerAdapter.getInitialState({
    loading: false,
    loaded: false,
    requestIsValid: false,
    theme: false,
  });
