import {BehaviorSubject} from 'rxjs';
import {DigApp, DigAppOptions} from './interfaces';
import {AppModel} from './models/app-model';
import {DigPlatformRef} from './interfaces/dig-platform-ref';

export class DigPlatform {
    private appRegistry: BehaviorSubject<DigPlatformRef[]> = new BehaviorSubject<DigPlatformRef[]>([]);

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

    get(id) {
        return this.appRegistry.getValue().find(app => app.id === id);
    }
}
