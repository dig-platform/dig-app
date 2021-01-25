import {DigApp} from '../interfaces';

export class DigPluginMetadata {

    constructor(private app: DigApp, private options?: any) {
    }

    beforeAdd(doc): any {
        doc.metaData = {
            createdBy: this.getUid(),
            createdAt: new Date()
        };
        return doc;
    }

    beforeUpdate(doc): any {
        doc['metaData.modifiedBy'] = this.getUid();
        doc['metaData.lastModified'] = new Date();
        return doc;
    }

    private getUid(): string {
      const auth = this.app.auth();
      if (! auth) {
        return null;
      }
      const current = auth.current();
      return current ? current.uid : null;
    }
}
