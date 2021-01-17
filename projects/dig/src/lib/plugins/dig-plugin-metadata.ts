import {DigApp} from '../interfaces';

export class DigPluginMetadata {

    constructor(private app: DigApp, private options?: any) {
    }

    beforePost(doc): any {
        doc.metaData = {
            createdBy: this.getUid(),
            createdAt: new Date()
        };
        return doc;
    }

    beforePut(doc): any {
        doc['metaData.modifiedBy'] = this.getUid();
        doc['metaData.lastModified'] = new Date();
        return doc;
    }

    beforePatch(doc): any {
        doc['metaData.modifiedBy'] = this.getUid();
        doc['metaData.lastModified'] = new Date();
        return doc;
    }

    private getUid(): string {
        return this.app.user ? this.app.user.uid : null;
    }
}
