import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StService {

  value = 0;
  constructor() {
    console.log('i am!!!')
  }

  setValue(v: any) {
    this.value = v;
  }

  getValue() {
    console.log(this.value);
    return this.value;
  }
}
