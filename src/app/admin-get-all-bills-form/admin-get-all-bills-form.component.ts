import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  errorMsg!: string;
  checkBillsStatus() {
    return this.Bills.length != 0;
  }
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private billService: BillServiceService) {}

  onSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    this.billService
      .getAllBillsAdmin(this.userName, this.password)
      .pipe(
        catchError((error) => {
          this.errorMsg = `Error: ${error.error.message}`;
          return of([]);
        })
      )
      .subscribe((bills) => (this.Bills = bills));
    this.isHidden = true;
  }

  get getUsername() {
    return this.userForm.get('userName');
  }

  get getPassword() {
    return this.userForm.get('password');
  }

  onBack() {
    this.isHidden = !this.isHidden;
    this.Bills = [];
  }
}
