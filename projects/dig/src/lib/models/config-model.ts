import {DigConfig} from '../interfaces/dig-config';

export class ConfigModel implements DigConfig{
  constructor(
    readonly id: string,
    readonly status?: null | 'new' | 'plan' | 'dev' | 'test' | 'live',
    readonly firebaseRoot?: string,
    readonly title?: string,
    readonly description?: string,
    readonly icon?: string
  ) { }
}

export function configFactory(data: any): ConfigModel {
  const {id, status, firebaseRoot, title, description, icon} = data;
  return new ConfigModel(id, status, firebaseRoot, title, description, icon);
}
