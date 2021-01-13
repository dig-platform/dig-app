import {DigAdapter} from '../interfaces/dig-adapter';
import {DigAdapterCallbackFunction} from '../interfaces/dig-adapter-callback-function';

export class CallbackAdapter implements DigAdapter {
  constructor(private callback: DigAdapterCallbackFunction) {
  }

  ref(config: any): any {
    return this.callback(config);
  }
}
