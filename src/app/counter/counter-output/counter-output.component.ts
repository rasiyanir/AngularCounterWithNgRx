import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
// export class CounterOutputComponent implements OnInit, OnDestroy {
export class CounterOutputComponent implements OnInit {

  // counter: number | undefined;

  counter$!: Observable<{ counter: number }>;

  // counterSubscription: Subscription | undefined;

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    }


  // ngOnInit(): void {
  //   this.counterSubscription = this.store.select('counter').subscribe( (data) => {
  //     this.counter = data.counter;
  //   })
  // }

  // ngOnDestroy(){
  //   this.counterSubscription?.unsubscribe();
  // }

}
