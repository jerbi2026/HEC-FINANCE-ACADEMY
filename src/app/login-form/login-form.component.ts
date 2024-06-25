import { AuthService } from './../auth.service';
import { RouteguardService } from './../routeguard.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private router: Router, private route: ActivatedRoute, private RouteguardService:RouteguardService,private AuthService:AuthService,private cookieService: CookieService){}
  username='';
  password='';
  erreur='';
  submit(){
    if(this.username!='' && this.password!=''){
      this.cookieService.set('identified', 'true');
      this.AuthService.check_login(this.username, this.password).subscribe((result) => {
        if (result === true) {
          this.erreur = '';
          this.RouteguardService.identified = true;
          alert("you are connected");
          this.router.navigate([`/home`]);
        } else {
          this.erreur = 'Veuillez vérifier vos informations';
        }
      });

    }
    
  }
  cancel(){
    this.username='';
    this.password='';
    this.erreur='';

  }

}
