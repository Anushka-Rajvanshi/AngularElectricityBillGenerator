import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-admin-get-bills-by-area-form',
  templateUrl: './admin-get-bills-by-area-form.component.html',
  styleUrls: ['./admin-get-bills-by-area-form.component.css'],
})
export class AdminGetBillsByAreaFormComponent {
  AdminUserName!: string;
  AdminPassword!: string;
  area!: string;
  Bills: Bill[] = [];
  isHidden: boolean = false;
  errorMsg!: string;
  checkBillsStatus() {
    return this.Bills.length != 0;
  }
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
  });

  constructor(private billService: BillServiceService) {}

  onSubmit(data: any) {
    this.AdminUserName = data.username;
    this.AdminPassword = data.password;
    this.area = data.area;
    this.billService
      .getBillsByAreaAdmin(this.AdminUserName, this.AdminPassword, this.area)
      .pipe(
        catchError((error) => {
          this.errorMsg = `Error: ${error.error.message}`;
          return of([]);
        })
      )
      .subscribe((bills) => (this.Bills = bills));
    this.isHidden = true;
  }

  get getUserName() {
    return this.userForm.get('username');
  }
  get getPassword() {
    return this.userForm.get('password');
  }
  get getArea() {
    return this.userForm.get('area');
  }
  onBack() {
    this.isHidden = !this.isHidden;
    this.Bills = [];
  }
}
