import {BehaviorSubject, Observable} from 'rxjs';
import {DigApp, DigAppOptions} from './interfaces';
import {AppModel} from './models/app-model';
import {DigPlatformRef} from './interfaces/dig-platform-ref';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DigPlatform {
    private appRegistry: BehaviorSubject<DigPlatformRef[]> = new BehaviorSubject<DigPlatformRef[]>([]);
    public readonly app$: Observable<any> = this.appRegistry.pipe(map(apps => apps.map(app => {
        return app;
    })));

    static factory(options: DigAppOptions): DigApp {
        return new AppModel(options);
    }

    init(options: DigAppOptions): DigApp {
        const app = DigPlatform.factory(options);
        const registry = [...this.appRegistry.getValue()];
        registry.push({
            id: options.config.id,
            app
        });
        this.appRegistry.next(registry);
        return app;
    }

    exists(id) {
        return !! this.appRegistry.getValue().find(app => app.id === id);
    }

    get(id) {
        const ref = this.appRegistry.getValue().find(app => app.id === id);
        return ref ? ref.app : undefined;
    }
}
