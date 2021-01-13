import {DigStateStore} from './dig-state-store';

export interface DigState {
  // state's unique id
  readonly id: string;

  // create a new state store
  create(id: string, defaultState?: any): DigStateStore;

  // determine if a store exists
  exists(id: string): boolean;

  // get a store
  get(id: string): DigStateStore;

  // get the current state as a string
  // if you optionally set the id it will only return the specified store
  snapshot(id?: string): string;
}
