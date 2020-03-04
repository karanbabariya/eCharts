import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class fetchDataService {

  constructor(private http: HttpClient) { }

  usEmployment() {
  	console.log('I am in service');
  	return this.http.get('https://datahub.io/core/employment-us/r/aat1.json');
  }
}
