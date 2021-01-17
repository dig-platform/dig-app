import {StateModel} from '../models/state-model';
import {DigConfig} from '../interfaces';

export class DigStateAdapter {
  private stateContainer = new StateModel(this.state);

  constructor(private state: any = {}) {
  }

  ref(config?: DigConfig): StateModel {
    return this.stateContainer;
  }
}
