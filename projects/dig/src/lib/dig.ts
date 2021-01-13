import {DigApp, DigAppOptions} from './interfaces';
import {AppModel} from './models/app-model';

export class Dig {
    static app(id, options: DigAppOptions): DigApp {
        const app = new AppModel(options);
        return app;
    }
}
