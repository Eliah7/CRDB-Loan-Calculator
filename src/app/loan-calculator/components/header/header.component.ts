import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as enums from '../../store/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<fromStore.CustomerState>) {}

  ngOnInit(): void {}

  onSlideToogle(event: MatSlideToggleChange) {
    this.store.dispatch(
      fromStore.changeTheme({
        theme: event.checked,
      })
    );
  }
}
