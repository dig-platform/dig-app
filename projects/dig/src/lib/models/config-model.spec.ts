import { ConfigModel } from './config-model';

describe('Config', () => {
  it('should create an instance', () => {
    expect(new ConfigModel('test')).toBeTruthy();
  });
});
