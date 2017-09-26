import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { BuyerRegistrationComponent } from './buyer-registration/buyer-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    LoginFooterComponent,
    SellerRegistrationComponent,
    BuyerRegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
