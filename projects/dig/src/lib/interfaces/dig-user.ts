export interface DigUser {
  // Firebase UID
  uid: string;

  // Email address associated with account
  email: string;

  // Profile photo from auth provider
  photoURL: string;

  // Display name from auth provider
  displayName: string;
}
