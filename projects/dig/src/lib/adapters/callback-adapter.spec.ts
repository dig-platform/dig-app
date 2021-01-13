import { CallbackAdapter } from './callback-adapter';
import {DigAdapterCallbackFunction} from '../interfaces/dig-adapter-callback-function';
import {DigConfig} from '../interfaces';


const callback: DigAdapterCallbackFunction = (config: DigConfig) => {
  return {
    id: config.id,
    text: config.title
  };
};

describe('CallbackAdapter', () => {
  it('should create an instance', () => {
    expect(new CallbackAdapter(callback)).toBeTruthy();
  });
  it('should run the callback function', () => {
    const adapter = new CallbackAdapter(callback);
    expect(adapter.ref({id: 'test'}).id).toEqual('test');
  });
});
