import { EntityState } from '@ngrx/entity';
import * as models from '../../../models';

export interface CustomerDetailsState
  extends EntityState<models.CustomerDetails> {}
