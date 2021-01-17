/**
 * Standard interface for resources that store metadata
 */
export interface DigMetadata {
  createdAt: any;
  createdBy?: string;
  lastModified?: any;
  modifiedBy?: string;
  data?: any;
}
