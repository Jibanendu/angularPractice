import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Login('','');
  submitted = false;

onSubmit() { this.submitted = true; }

showFormControls(form: any) {
    return JSON.stringify(this.model);
  }
}
