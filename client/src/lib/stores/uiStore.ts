import { makeAutoObservable } from "mobx";

export class UiStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }
}
