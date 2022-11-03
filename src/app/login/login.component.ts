import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logserv: LoginserviceService) { }

  ngOnInit(): void {
  }

  tryLogin(data: any) {
    
    this.logserv.login(data.login, data.password, data.client_id, data.client_secret, data.scope);
  }

}
