import {BehaviorSubject, Observable} from 'rxjs';

export interface DigStateStore {
  // store's unique id
  readonly id: string;

  // direct access to the underlying BehaviorSubject
  readonly store: BehaviorSubject<any>;

  // current snapshot of the container state
  current: any;

  // observable container state
  current$: Observable<any>;

  // set the current state
  set(data: any): void;

  // merge your data with the current state
  update(data: any): void;

  // reset the state to null
  reset(): void;
}
