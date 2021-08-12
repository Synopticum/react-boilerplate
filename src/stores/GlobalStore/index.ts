import { computed, makeObservable, observable } from 'mobx';
import { BaseStore } from 'src/stores';

export const DEFAULT_HEADER_TEXT = 'default header text (global store)';
export const DEFAULT_FOOTER_TEXT = 'default footer text (global store)';

export default class GlobalStore implements BaseStore {
  headerText: string = DEFAULT_HEADER_TEXT;
  footerText: string = DEFAULT_FOOTER_TEXT;

  changeGlobalStuff(): void {
    this.headerText = 'changed header text (global store)';
    this.footerText = 'changed footer text (global store)';
  }

  get someOtherGlobalValue(): string {
    return this.headerText && this.footerText ? `${this.headerText} & ${this.footerText}` : null;
  }

  resetData(): void {
    this.headerText = DEFAULT_HEADER_TEXT;
    this.footerText = DEFAULT_FOOTER_TEXT;
  }

  constructor() {
    makeObservable(this, {
      headerText: observable,
      footerText: observable,
      someOtherGlobalValue: computed,
    });
  }
}

export const globalStore = new GlobalStore();
