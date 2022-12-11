import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";


@Component({
    templateUrl: "auth.component.html",
})
export class AuthComponent {
    public username: any;
    public password: any;
    public errorMessage: any;

    constructor(private router: Router,
                private auth:AuthService){}


    authenticate(form: NgForm) {
        if(form.valid){
            // perform authetication
            // this.auth.authenticate(this.username,this.password).subscribe(response =>{
            //     this.router.navigateByUrl("/admin/main");
            // })
            this.router.navigateByUrl("/admin/main")
            
        }else{
            this.errorMessage = "Form Data Invalid"
        }
    }
}