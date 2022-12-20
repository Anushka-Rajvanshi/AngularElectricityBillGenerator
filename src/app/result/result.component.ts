import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  userName!: string;
  password!: string;
  Bills: Bill[] = [];
  checkBillsStatus() {
    return this.Bills.length != 0;
  }
  constructor(
    private _Activedroute: ActivatedRoute,
    private billService: BillServiceService
  ) {}
  ngOnInit() {
    this.userName = this._Activedroute.snapshot.queryParams['userName'];
    this.password = this._Activedroute.snapshot.queryParams['password'];
    this.billService
      .getAllBillsAdmin(this.userName, this.password)
      .subscribe((bills) => (this.Bills = bills));
  }
}
