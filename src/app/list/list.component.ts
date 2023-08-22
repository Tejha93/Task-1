import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  dataArray: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataArray = this.dataService.getDataArray();
  }

  deleteData(index: number) {
    this.dataService.deleteData(index);
  }
  
}
