import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bill } from './bill';
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root',
})
export class BillServiceService {
  constructor(private http: HttpClient) {}

  getAllBillsConsumer(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>('http://localhost:8080/consumer/getAllBills?consumerId=1')
      .pipe(delay(5000));
  }

  getBillsByMonthConsumer(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/consumer/getBillsByMonth?consumerId=1&month=jan&year=2022'
      )
      .pipe(delay(5000));
  }

  getBillsByYearConsumer(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/consumer/getBillsByYear?consumerId=1&year=2022'
      )
      .pipe(delay(5000));
  }

  getAllBillsAdmin(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/admin/getBills?userName=admin&password=admin'
      )
      .pipe(delay(5000));
  }

  getBillsByMonthAdmin(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/admin/getBillsByMonth?userName=admin&password=admin&month=jan&year=2022'
      )
      .pipe(delay(5000));
  }

  getBillsByYearAdmin(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/admin/getBillsByYear?userName=admin&password=admin&year=2022'
      )
      .pipe(delay(5000));
  }

  getBillsByAreaAdmin(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/admin/getBillsByArea?userName=admin&password=admin&area=anna nagar'
      )
      .pipe(delay(5000));
  }

  getBillsByCityAdmin(): Observable<Bill[]> {
    return this.http
      .get<Bill[]>(
        'http://localhost:8080/admin/getBillsByCity??userName=admin&password=admin&city=chennai'
      )
      .pipe(delay(5000));
  }

  // addStudent():Observable<Consumer>{
  //     return this.http.post<Consumer>("http://localhost:8080/api/students",{
  //       "id": "20",
  //       "name": "Ramesh",
  //       "age": "60"
  //     });
  // }
}
