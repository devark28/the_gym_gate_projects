/*
Solve all the typing issues in the code without changing the implementation

class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  static getCount() {
    return this.count; 
  }
}
*/

class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count; 
  }
}
