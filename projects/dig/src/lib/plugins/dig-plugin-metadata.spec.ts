import { DigPluginMetadata } from './dig-plugin-metadata';
import {DigApp} from '../interfaces';
import {TEST_APP} from '../../test/test-mocks';

describe('DigPluginMetadata', () => {
  it('should create an instance', () => {
    expect(new DigPluginMetadata(TEST_APP)).toBeTruthy();
  });
});
