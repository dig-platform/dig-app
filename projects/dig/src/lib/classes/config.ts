import {DigConfig} from '../interfaces/dig-config';

export class Config implements DigConfig{
  constructor(
    readonly id: string,
    readonly status?: null | 'new' | 'plan' | 'dev' | 'test' | 'live',
    readonly firebaseRoot?: string,
    readonly title?: string,
    readonly description?: string,
    readonly icon?: string
  ) { }
}

export function configFactory(data: any): Config {
  const {id, status, firebaseRoot, title, description, icon} = data;
  return new Config(id, status, firebaseRoot, title, description, icon);
}
