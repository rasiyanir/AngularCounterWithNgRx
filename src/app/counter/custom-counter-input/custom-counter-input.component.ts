import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selector';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;

  name$!: Observable<string>;

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName)
  }

  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value}))
    // console.log(this.value);
  }

  onChangeName(){
    this.store.dispatch(changeName());
  }

}
