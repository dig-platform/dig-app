import {BehaviorSubject, Observable} from 'rxjs';

export class State {
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

    constructor(private id: string) {
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
