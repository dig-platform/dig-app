import { State } from './state';

describe('State', () => {
  it('should create an instance', () => {
    expect(new State()).toBeTruthy();
  });
  it('should create a container from an object', () => {
    const state = new State({test: {value: true}});
    expect(state.get('test')).toBeTruthy();
    expect(state.get('test').current.value).toBeTrue();
  });
  it('should a container from an array', () => {
    const state = new State({testArray: ['value', true]});
    expect(state.get('testArray')).toBeTruthy();
    expect(state.get('testArray').current[1]).toBeTrue();
  });
  it('should create a static snapshot', () => {
    const state = new State({test: {value: true}, testArray: ['value', true]});
    const snap = state.snapshot();
  });
});
