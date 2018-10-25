import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SocialLoginModule, AuthService, AuthServiceConfig, FacebookLoginProvider } from "angular-6-social-login";

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css']
})
export class FbloginComponent implements OnInit {

  constructor( private socialAuthService: AuthService, private router: Router ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
        console.log(socialPlatform+" sign-in user data : " , userData);
        this.navigateToHomeRoute()
      }
    );
  }
  navigateToHomeRoute():void{
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

}
