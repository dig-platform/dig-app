export interface DigConfig {
  // unique app id
  readonly id: string;

  // current status
  readonly status?: null | 'new' | 'plan' | 'dev' | 'test' | 'live';

  // set this to put all of your app data in subcollections
  // typically used for projects that serve multiple apps where you want to avoid collection name conflicts
  readonly firebaseRoot?: string;

  // app title
  readonly title?: string;

  // app description
  readonly description?: string;

  // app icon
  readonly icon?: string;
}
