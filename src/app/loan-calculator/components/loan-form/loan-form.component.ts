import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

import * as fromStore from '../../store';
import { ErrorDetailsComponent } from '../error-details/error-details.component';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent implements OnInit {
  requestIsValid$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.LoanCalculatorState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.requestIsValid$ = this.store.select(
      fromStore.getCustomersRequestIsValid
    );

    // this.requestIsValid$.pipe(skip(1)).subscribe((requestStatus) => {
    //   console.log(requestStatus);
    //   if (requestStatus) this.openDialog();
    // });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ErrorDetailsComponent, {
      width: '499px',
      height: '311px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
