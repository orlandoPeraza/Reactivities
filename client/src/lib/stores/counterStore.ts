import { action, makeObservable, observable } from "mobx";
export default class CounterStore {
  title = "Counter store";
  count = 0;

  constructor() {
    makeObservable(this, {
      title: observable,
      count: observable,
      increment: action,
      decrement: action,
    });
  }

  increment = (amount = 1) => {
    this.count += amount;
  };

  decrement = (amount = 1) => {
    this.count -= amount;
  };
}
