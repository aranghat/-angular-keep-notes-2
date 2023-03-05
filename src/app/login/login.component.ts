import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username = new FormControl('');
    password = new FormControl('');
    submitMessage: String;

    constructor(private authentiationService: AuthenticationService, private routerService : RouterService) {
    }
    ngOnInit() {

    }

    loginSubmit() {    
        //authenticating user and storing token in local storage 
        this.authentiationService.authenticateUser({username:this.username.value,password:this.password.value}).subscribe(
            data => {
                this.authentiationService.setBearerToken(data['token']);
                this.routerService.routeToDashboard();
            },
            err => {
                if (err.status == 403) {
                    this.submitMessage = 'Unauthorized';
                }
                else {
                    this.submitMessage = err.message;
                }
            }
        )
    }
}
