import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataArray: any[] = [];

  saveData(newData: any) {
    this.dataArray.push(newData);
  }

  getDataArray() {
    return this.dataArray;
  }

  deleteData(index: number) {
    this.dataArray.splice(index, 1);
  }

  constructor() {}
}
