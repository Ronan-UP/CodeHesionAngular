import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Output } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  @Output()
  key: string;
  constructor(private httpC: HttpClient) { this.key = ''; }

  login(logind: string, passw: string, clientid: string, clients: string, sc: string) {
    const port = '3000';
    const url = 'https://edeaf-api-staging.azurewebsites.net';
    const endpoint = '/connect/token';
    console.log('here');
    
    const body = new HttpParams().set('grant_type','password')
    .set('client_id',clientid)
    .set('client_secret', clients)
    .set('scope', sc)
    .set('username', logind)
    .set('password', passw);

    const head = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.httpC.post(url + ':' + port + endpoint, {headers:head, parameters:body}).pipe(catchError(error => {
       console.log(error);
       return of(null);
    }
    )).subscribe(dat => { console.log(dat); return dat; });
  }
}
