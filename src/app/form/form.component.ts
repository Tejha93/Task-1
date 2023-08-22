import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private dataService: DataService) {}

  studentName: string = '';
  studentId: string = '';
  studentClass: string = '';
  address: string = '';

  saveIntoTable() {
    const newData = {
      studentName: this.studentName,
      studentId: this.studentId,
      studentClass: this.studentClass,
      address: this.address,
    };

    this.dataService.saveData(newData);

    this.studentName = '';
    this.studentId = '';
    this.studentClass = '';
    this.address = '';
  }
}
