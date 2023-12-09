import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUserWebComponent } from './reg-user/reg-user-web/reg-user-web.component';
import { RegUserMobileComponent } from './reg-user/reg-user-mobile/reg-user-mobile.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { PropertyViewMobileComponent } from './property-view/property-view-mobile/property-view-mobile.component';
import { PropertyViewWebComponent } from './property-view/property-view-web/property-view-web.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpTimerPipe } from './otp-timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegUserWebComponent,
    RegUserMobileComponent,
    RegUserComponent,
    PropertyViewComponent,
    PropertyViewMobileComponent,
    PropertyViewWebComponent,
    OtpTimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
