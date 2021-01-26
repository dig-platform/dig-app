import { StateModel } from './state-model';

fdescribe('State', () => {
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

  // test array access
  it('should push an element to an array', () => {
    const state = new StateModel({testArray: ['dog']});
    const container = state.get('testArray');
    container.push('cat');
    expect(container.current.length).toEqual(2);
    expect(container.current.indexOf('cat')).toEqual(1);
  });
  it('should pop an element off an array', () => {
    const state = new StateModel({testArray: ['dog', 'cat']});
    const container = state.get('testArray');
    const cat = container.pop();
    expect(cat).toEqual('cat');
  });
  it('should unshift an element to an array', () => {
    const state = new StateModel({testArray: ['dog']});
    const container = state.get('testArray');
    container.unshift('cat');
    expect(container.current.length).toEqual(2);
    expect(container.current.indexOf('cat')).toEqual(0);
  });
  it('should shift an element off an array', () => {
    const state = new StateModel({testArray: ['dog', 'cat']});
    const container = state.get('testArray');
    const dog = container.shift();
    expect(dog).toEqual('dog');
  });
});
