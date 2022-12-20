import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-admin-get-all-bills-form',
  templateUrl: './admin-get-all-bills-form.component.html',
  styleUrls: ['./admin-get-all-bills-form.component.css'],
})
export class AdminGetAllBillsFormComponent {
  userName!: string;
  password!: string;
  Bills: Bill[] = [];
  isHidden: boolean = false;
  checkBillsStatus() {
    return this.Bills.length != 0;
  }
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  constructor(private billService: BillServiceService) {}

  onSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    this.billService
      .getAllBillsAdmin(this.userName, this.password)
      .subscribe((bills) => (this.Bills = bills));
    this.isHidden = true;
  }
}
