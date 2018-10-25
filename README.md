# Angular-6-Facebook-Login

**1. Create a facebook application**

    Goto developer.facebook.com
    Login with your facebook credential.
    Create New App, it will give you an Application ID for your new App.
    
**2. Create Angular Application using Angular CLI**   
    
**3. Install angular-6-social-login and setting up Facebook in your app**  
  - npm install --save angular-6-social-login 
  - Import SocialLoginModule, AuthServiceConfig, FacebookLoginProvider from angular-6-social-login in your app.module.ts
  - Add SocialLoginModule in imports array of @Ngmodule decorator in app.module.ts
  - Add below object in providers array in app.module.ts
    
        {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
        }
        
  - Include below code in app.module.ts and put your `application ID in FacebookLoginProvider`
             
              export function getAuthServiceConfigs() {

               let config = new AuthServiceConfig(
                  [
                    {
                      id: FacebookLoginProvider.PROVIDER_ID,
                      provider: new FacebookLoginProvider("Your Application ID")
                    }
                  ]);
                   return config;
              }
              
  **4. Create the components**
  
   - In my case, i have created a fbLogin and home component
   - Put below code in fbLogin.component.ts 
      
            
          constructor( private socialAuthService: AuthService, private router: Router ) {}

          public socialSignIn(socialPlatform : string) {
            let socialPlatformProvider;
            if(socialPlatform == "facebook"){
              socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
            }
            this.socialAuthService.signIn(socialPlatformProvider).then(
                (userData) => {
                console.log(socialPlatform+" sign in data : " , userData);
                this.navigateToHomeRoute()
              }
            );
          }
          navigateToHomeRoute():void{
            this.router.navigate(['/home']);
          }
      
   - Put below code in fbLogin.component.html
     
         <button class="loginBtn loginBtn--facebook" (click)="socialSignIn('facebook')">Login with facebook</button>
         
 **5. Install ngx-order-pipe**
 
      run the command from node terminal `npm install ngx-order-pipe --save `
          
  **6. Compile and Run**
  
      ng serve --open
  
  
