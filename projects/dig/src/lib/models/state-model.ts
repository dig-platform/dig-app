import {BehaviorSubject, Observable} from 'rxjs';

export class StateModel {
    private stores: Store[] = [];

    constructor(data = null) {
        if (data) {
            Object.keys(data).forEach(id => {
                this.create(id, data[id]);
            });
        }
    }

    get(id): Store {
        const store = this.stores.find((s: any) => s.id === id);
        if (!store) {
            throw new Error(`Unable to find state container "${id}"`);
        }
        return store;
    }

    create(id, defaultState = {}): Store {
        if (this.exists(id)) {
            throw new Error(`Unable to create container "${id}"; container already exists`);
        }
        const store = new Store(id);
        store.set(defaultState);
        this.stores.push(store);
        return store;
    }

    exists(id): boolean {
        return !!this.stores.find((s: any) => s.id === id);
    }

    snapshot(): any {
        const snap = {};
        return this.stores.reduce((a: any, store) => {
            a[store.getKey()] = store.current;
            return a;
        }, snap);
    }

    reset(): void {
      this.stores = [];
    }
}

export class Store {
    public readonly store = new BehaviorSubject<any>(null);

    get current(): any {
        return this.store.getValue();
    }

    readonly current$: Observable<any> = this.store.asObservable();

  constructor(private id: string) {
  }

  update(data: any): void {
      const state = Object.assign({}, this.current, this.detach(data));
      this.store.next(state);
  }

  set(data: any): void {
      this.store.next(this.detach(data));
  }

  unset(): void {
      this.store.next(null);
  }

  // provide array access if this store is an array
  isArray(): boolean {
    return Array.isArray(this.current);
  }

  // throws an error if the store is not an array
  validateArrayMethod(): void {
    if (! this.isArray()) {
      throw new Error('Array methods are only enabled for stores that model arrays of data');
    }
  }

  push(entry: any): void {
    try {
      this.validateArrayMethod();
      const state = [...this.current];
      state.push(entry);
      this.set(state);
    } catch (e) {
      console.error(e);
    }
  }

  pop(): any {
    try {
      this.validateArrayMethod();
      const state = [...this.current];
      const entry = state.pop();
      this.set(state);
      return entry;
    } catch (e) {
      console.error(e);
    }
  }

  shift(): any {
    try {
      this.validateArrayMethod();
      const state = [...this.current];
      const entry = state.shift();
      this.set(state);
      return entry;
    } catch (e) {
      console.error(e);
    }
  }

  unshift(entry: any): void {
    try {
      this.validateArrayMethod();
      const state = [...this.current];
      state.unshift(entry);
      this.set(state);
    } catch (e) {
      console.error(e);
    }
  }

  getKey(): string {
      return this.id;
  }

  match(id: string): boolean {
      return this.id === id;
  }

  detach(data: any): void {
      return Array.isArray(data) ? [...data] : {...data};
  }
}
