import { StateModel } from './state-model';

describe('State', () => {
  it('should create an instance', () => {
    expect(new StateModel()).toBeTruthy();
  });
  it('should create a container from an object', () => {
    const state = new StateModel({test: {value: true}});
    expect(state.get('test')).toBeTruthy();
    expect(state.get('test').current.value).toBeTrue();
  });
  it('should a container from an array', () => {
    const state = new StateModel({testArray: ['value', true]});
    expect(state.get('testArray')).toBeTruthy();
    expect(state.get('testArray').current[1]).toBeTrue();
  });
  it('should create a static snapshot', () => {
    const state = new StateModel({test: {value: true}, testArray: ['value', true]});
    const snap = state.snapshot();
  });
});
