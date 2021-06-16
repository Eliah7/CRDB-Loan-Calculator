import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { StoreModule } from '@ngrx/store';
import { customerReducer, reducers } from './store/reducers';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { ErrorDetailsComponent } from './components/error-details/error-details.component';

export const ROUTES: Routes = [{ path: '', component: LoanFormComponent }];
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatCardModule,
  MatSliderModule,
  MatDialogModule,
  MatSlideToggleModule,
  // BrowserAnimationsModule,
];

@NgModule({
  imports: [
    ...materialModules,
    CommonModule,
    RouterModule.forChild(ROUTES),
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('customers', customerReducer),
  ],
  declarations: [
    HeaderComponent,
    LoanFormComponent,
    PersonalDetailsFormComponent,
    LoanDetailsComponent,
    ErrorDetailsComponent,
  ],
})
export class LoanCalculatorModule {}
