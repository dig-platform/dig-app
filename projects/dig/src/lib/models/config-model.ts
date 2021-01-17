import {DigConfig} from '../interfaces/dig-config';

export class ConfigModel implements DigConfig{
  constructor(
    readonly id: string,
    readonly status?: null | 'new' | 'plan' | 'dev' | 'test' | 'live',
    readonly dbRoot?: string,
    readonly storageRoot?: string,
    readonly title?: string,
    readonly description?: string,
    readonly icon?: string
  ) { }
}

export function configFactory(data: any): ConfigModel {
  const {id, status, dbRoot, storageRoot, title, description, icon} = data;
  return new ConfigModel(id, status, dbRoot, storageRoot, title, description, icon);
}
