import React from 'react';
import { makeObservable, observable } from 'mobx';
import { BaseStore } from 'src/stores';

const DEFAULT_COLOR = 'black';
const DEFAULT_BORDER_RADIUS = 10;

export default class SimpleLocalStore implements BaseStore {
  color = DEFAULT_COLOR;
  borderRadius = DEFAULT_BORDER_RADIUS;

  changeColor(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.nativeEvent.target as HTMLInputElement;
    this.color = value;
  }

  changeBorderRadius(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.nativeEvent.target as HTMLInputElement;
    this.borderRadius = parseInt(value);
  }

  resetData(): void {
    this.color = DEFAULT_COLOR;
    this.borderRadius = DEFAULT_BORDER_RADIUS;
  }

  constructor() {
    makeObservable(this, {
      color: observable,
      borderRadius: observable,
    });
  }
}
