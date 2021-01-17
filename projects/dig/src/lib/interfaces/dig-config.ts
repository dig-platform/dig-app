export interface DigConfig {
  // unique app id
  readonly id: string;

  // current status
  readonly status?: null | 'new' | 'plan' | 'dev' | 'test' | 'live';

  // app title
  readonly title?: string;

  // app description
  readonly description?: string;

  // app icon
  readonly icon?: string;
}
