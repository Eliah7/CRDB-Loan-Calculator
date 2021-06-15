import { Customer } from '../domain';

export interface CustomerDetails {
  customer: Customer;
  loading: boolean;
  loaded: boolean;
}
