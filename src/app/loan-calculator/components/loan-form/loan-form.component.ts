import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent implements OnInit {
  requestIsValid$: Observable<boolean>;

  constructor(private store: Store<fromStore.LoanCalculatorState>) {}

  ngOnInit(): void {
    this.requestIsValid$ = this.store.select(
      fromStore.getCustomersRequestIsValid
    );
  }
}
