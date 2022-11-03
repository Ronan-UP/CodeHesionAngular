import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private httpC:HttpClient) { }

  login(logind:string, passw:string, clientid:string, clients:string, sc:string)
  {
    const port = '3000';
    const url = 'https://edeaf-api-staging.azurewebsites.net';
    const endpoint = '/connect/token';
    
    this.httpC.post(url+':'+port+endpoint, 'username=' + logind+ '&password='+passw+'&client_id='+clientid+ '&client_secret='+clients+'&scope='+sc+'&grant_type=password', {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).subscribe(dat => {alert(dat);});
  }
}
