export interface DigConfig {
  // unique app id
  readonly id: string;

  // current status
  readonly status?: string;

  // app title
  readonly title?: string;

  // app description
  readonly description?: string;

  // app icon
  readonly icon?: string;
}
